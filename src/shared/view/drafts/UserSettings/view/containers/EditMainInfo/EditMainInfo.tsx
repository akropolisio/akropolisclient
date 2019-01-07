import * as React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { bind } from 'decko';

import { i18nConnect, ITranslateProps, tKeys as allKeys } from 'services/i18n';
import { TextInputField } from 'shared/view/redux-form';
import { isRequired } from 'shared/validators';
import { Button } from 'shared/view/elements';

import avatar from './images/avatar.svg';
import { provideStyles, StylesProps } from './EditMainInfo.style';

const tKeys = allKeys.features.userSettings;

interface IFormData {
  userName: string;
  surname: string;
}

const names: { [key in keyof IFormData]: key } = {
  surname: 'surname',
  userName: 'userName',
};

const commonFieldProps = {
  required: true,
  fullWidth: true,
  validate: isRequired,
};

type IProps = StylesProps & ITranslateProps & InjectedFormProps<IFormData>;

class EditMainInfo extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={this.onSubmit} >
          <div className={classes.formContent}>
            <div className={classes.avatarWrapper}>
              <img className={classes.avatar} src={avatar} />
            </div>
            <div className={classes.fields}>
              <div className={classes.field}>
                <TextInputField {...commonFieldProps} name={names.userName} label={t(tKeys.fields.userName.getKey())} />
              </div>
              <div className={classes.field}>
                <TextInputField {...commonFieldProps} name={names.surname} label={t(tKeys.fields.surname.getKey())} />
              </div>
            </div>
          </div>
          <div className={classes.formButtons}>
            <Button className={classes.formButton} fullWidth type="submit" variant="contained" color="primary">
              {t(tKeys.submit.getKey())}
            </Button>
            <Button className={classes.formButton} fullWidth onClick={this.resetForm}>
              {t(tKeys.cancel.getKey())}
            </Button>
          </div>
        </form>
      </div>);
  }

  @bind
  public onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const { handleSubmit } = this.props;
    handleSubmit(() => {
      //
    })(event);
  }

  @bind
  public resetForm() {
    this.props.reset();
  }
}

export default reduxForm<IFormData>({ form: 'editProfile', initialValues: { surname: 'Klimov', userName: 'Pavel' } })(
  i18nConnect(
    provideStyles(EditMainInfo),
  ),
);
