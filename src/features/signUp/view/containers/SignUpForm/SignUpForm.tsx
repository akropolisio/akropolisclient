import * as React from 'react';
import { bind } from 'decko';
import { Form } from 'react-final-form';

import { i18nConnect, ITranslateProps, tKeys as allKeys } from 'services/i18n';
import { WithSignTransaction, SignTransactionFunction } from 'services/signTransaction';

import { UserRole } from 'shared/types/models';
import { Button } from 'shared/view/elements';
import { TextInputField } from 'shared/view/form';
import { isRequired } from 'shared/validators';

import { StylesProps, provideStyles } from './SignUpForm.style';

const tKeys = allKeys.features.signUp;

interface IFormData {
  userName: string;
  surname: string;
}

interface IOwnProps {
  role: UserRole;
  onSuccess(): void;
}

interface IState {
  isOpen: boolean;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const initialValues: IFormData = {
  surname: '',
  userName: '',
};

const names: { [key in keyof IFormData]: key } = {
  surname: 'surname',
  userName: 'userName',
};

const commonFieldProps = {
  required: true,
  fullWidth: true,
  validate: isRequired,
};

class SignUpForm extends React.PureComponent<IProps, IState> {
  public state: IState = { isOpen: false };
  public render() {
    const { classes, onSuccess, t } = this.props;

    return (
      <WithSignTransaction onSuccess={onSuccess}>
        {({ signTransaction }) => (
          <Form onSubmit={this.makeOnSubmit(signTransaction)} initialValues={initialValues}>
            {({ handleSubmit }) => (
              <form className={classes.root} onSubmit={handleSubmit}>
                <div className={classes.field}>
                  <TextInputField
                    {...commonFieldProps}
                    name={names.userName}
                    label={t(tKeys.fields.userName.getKey())}
                  />
                </div>
                <div className={classes.field}>
                  <TextInputField {...commonFieldProps} name={names.surname} label={t(tKeys.fields.surname.getKey())} />
                </div>
                <Button className={classes.submit} fullWidth type="submit" variant="contained" color="primary">
                  {t(tKeys.submit.getKey())}
                </Button>
              </form>
            )}
          </Form>
        )}
      </WithSignTransaction>
    );
  }

  @bind
  private makeOnSubmit(signTransaction: SignTransactionFunction) {
    return ({ surname, userName }: IFormData) => {
      signTransaction('signUp', { surname, name: userName, role: this.props.role });
    };
  }
}

export { IOwnProps };
export default (
  provideStyles(
    i18nConnect(SignUpForm),
  )
);
