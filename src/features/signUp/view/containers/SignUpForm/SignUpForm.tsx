import * as React from 'react';
import { bind } from 'decko';

import { StylesProps, provideStyles } from './SignUpForm.style';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { TextInputField } from 'shared/view/redux-form';
import { UserRole } from 'shared/types/models';
import { Button } from 'shared/view/elements';
import { WithSignTransaction, SignTransactionFunction } from 'services/signTransaction';
import { isRequired } from 'shared/validators';
import { i18nConnect, ITranslateProps, tKeys as allKeys } from 'services/i18n';

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

type IProps = IOwnProps & StylesProps & ITranslateProps & InjectedFormProps<IFormData, IOwnProps>;

const names: { [key in keyof IFormData]: key } = {
  surname: 'surname',
  userName: 'userName',
};

class SignUpForm extends React.PureComponent<IProps, IState> {
  public state: IState = { isOpen: false };
  public render() {
    const { classes, onSuccess, t } = this.props;

    const commonFieldProps = {
      required: true,
      fullWidth: true,
      validate: isRequired,
    };

    return (
      <WithSignTransaction onSuccess={onSuccess}>
        {({ signTransaction }) => (
          <form className={classes.root} onSubmit={this.makeOnSubmit(signTransaction)}>
            <div className={classes.field}>
              <TextInputField {...commonFieldProps} name={names.userName} label={t(tKeys.fields.userName.getKey())} />
            </div>
            <div className={classes.field}>
              <TextInputField {...commonFieldProps} name={names.surname} label={t(tKeys.fields.surname.getKey())} />
            </div>
            <Button className={classes.submit} fullWidth type="submit" variant="contained" color="primary">
              {t(tKeys.submit.getKey())}
            </Button>
          </form>
        )}
      </WithSignTransaction>
    );
  }

  @bind
  private makeOnSubmit(signTransaction: SignTransactionFunction) {
    return (event: React.FormEvent<HTMLFormElement>) => {
      const { handleSubmit, role } = this.props;
      handleSubmit(({ surname, userName }) => {
        signTransaction('signUp', { surname, name: userName, role });
      })(event);
    };
  }
}

export { IOwnProps };
export default (
  reduxForm<IFormData, IOwnProps>({ form: 'sign-up', initialValues: { surname: '', userName: '' } })(
    provideStyles(
      i18nConnect(SignUpForm),
    ),
  )
);
