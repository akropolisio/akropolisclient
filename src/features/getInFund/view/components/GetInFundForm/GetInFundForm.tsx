import * as React from 'react';
import { bind } from 'decko';
import { Form } from 'react-final-form';
import * as moment from 'moment';

import { i18nConnect, ITranslateProps, tKeys as allKeys, ITranslateFunction, ITranslateKey } from 'services/i18n';
import { WithSignTransaction, SignTransactionFunction } from 'services/signTransaction';

import { TimePeriod, IFund } from 'shared/types/models';
import { Button, Tooltip, MenuItem } from 'shared/view/elements';
import { TextInputField, NumberInputField, SliderField, SliderSelectField, DatePickerField } from 'shared/view/form';
import { lessThenOrEqual, moreThenOrEqual, isEthereumAddress } from 'shared/validators';

import { StylesProps, provideStyles } from './GetInFundForm.style';
import { getInFundConfig } from 'features/getInFund/constanst';
import { Question } from 'shared/view/elements/Icons';
import { formatUSDAmount, formatSliderLabelDefault } from 'shared/helpers/format';
import { MarkAs } from '_helpers';

const tKeys = allKeys.features.getInFund.form;

interface IFormData {
  regularPayment: number;
  periodicity: TimePeriod;
  retirementDate: moment.Moment;
  wallet: string;
}

interface IOwnProps {
  fund: IFund;
  onSuccess(): void;
  onCancel(): void;
}

interface IState {
  isOpen: boolean;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const initialValues: IFormData = {
  regularPayment: getInFundConfig.minRegularPayment,
  periodicity: getInFundConfig.availablePeriodicity[0],
  retirementDate: getInFundConfig.minRetirementDate,
  wallet: '',
};

const names: { [key in keyof IFormData]: key } = {
  regularPayment: 'regularPayment',
  periodicity: 'periodicity',
  retirementDate: 'retirementDate',
  wallet: 'wallet',
};

const getFieldProps = (field: keyof IFormData, t: ITranslateFunction) => ({
  required: true,
  fullWidth: true,
  name: names[field],
  label: t(tKeys.fields[field].getKey()),
});

function validateForm(values: IFormData): Partial<MarkAs<ITranslateKey, IFormData>> {
  return {
    regularPayment: (
      lessThenOrEqual(getInFundConfig.maxRegularPayment, values.regularPayment) ||
      moreThenOrEqual(getInFundConfig.minRegularPayment, values.regularPayment)
    ),
    wallet: isEthereumAddress(values.wallet),
  };
}

class GetInFundForm extends React.PureComponent<IProps, IState> {
  public state: IState = { isOpen: false };
  public render() {
    const { classes, onSuccess, t, onCancel } = this.props;

    const periodicityItems = getInFundConfig.availablePeriodicity.map(item => (
      <MenuItem key={item} value={item}>{t(tKeys.periodicityItemPrefix.getKey())} {item}</MenuItem>
    ));

    return (
      <WithSignTransaction onSuccess={onSuccess}>
        {({ signTransaction }) => (
          <Form
            onSubmit={this.makeOnSubmit(signTransaction)}
            validate={validateForm}
            initialValues={initialValues}
            subscription={{}}
          >
            {({ handleSubmit }) => (
              <form className={classes.root} onSubmit={handleSubmit}>
                <div className={classes.field}>
                  <NumberInputField
                    {...getFieldProps('regularPayment', t)}
                    thousandSeparator
                    prefix="$"
                    decimalScale={2}
                  />
                  <div className={classes.slider}>
                    <SliderField
                      name={names.regularPayment}
                      min={getInFundConfig.minRegularPayment}
                      max={getInFundConfig.maxRegularPayment}
                      step={10}
                      formatLabel={formatUSDAmount}
                    />
                  </div>
                </div>
                <div className={classes.field}>
                  <TextInputField {...getFieldProps('periodicity', t)} select>
                    {periodicityItems}
                  </TextInputField>
                  <div className={classes.slider}>
                    <SliderSelectField name={names.periodicity} formatLabel={formatSliderLabelDefault}>
                      {periodicityItems}
                    </SliderSelectField>
                  </div>
                </div>
                <div className={classes.field}>
                  <DatePickerField
                    {...getFieldProps('retirementDate', t)}
                    minDate={getInFundConfig.minRetirementDate}
                    maxDate={getInFundConfig.maxRetirementDate}
                  >
                    {periodicityItems}
                  </DatePickerField>
                </div>
                <div className={classes.field}>
                  <TextInputField
                    {...getFieldProps('wallet', t)}
                    InputProps={{
                      endAdornment: (
                        <Tooltip placement="top" title={t(tKeys.walletHint.getKey())}>
                          <Question className={classes.root} />
                        </Tooltip>
                      ),
                    }}
                  />
                </div>
                <div className={classes.actions}>
                  <Button className={classes.action} fullWidth type="submit" variant="contained" color="primary">
                    {t(tKeys.submitButton.getKey())}
                  </Button>
                  <Button
                    className={classes.action}
                    onClick={onCancel}
                    fullWidth
                    type="button"
                    variant="outlined"
                    color="primary"
                  >
                    {t(tKeys.cancelButton.getKey())}
                  </Button>
                </div>
              </form>
            )}
          </Form>
        )}
      </WithSignTransaction>
    );
  }

  @bind
  private makeOnSubmit(signTransaction: SignTransactionFunction) {
    return ({ retirementDate, ...data }: IFormData) => {
      signTransaction('getInFund', {
        ...data,
        fundId: this.props.fund.id,
        retirementDate: retirementDate.unix() * 1000,
      });
    };
  }
}

export { IOwnProps };
export default (
  provideStyles(
    i18nConnect(GetInFundForm),
  )
);
