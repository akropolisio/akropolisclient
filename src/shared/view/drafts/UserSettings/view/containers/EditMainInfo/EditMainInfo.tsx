import * as React from 'react';
import { bind } from 'decko';
import { Form } from 'react-final-form';

import { i18nConnect, ITranslateProps, tKeys as allKeys } from 'services/i18n';
import { TextInputField } from 'shared/view/form';
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

const initialValues: IFormData = {
  surname: 'Klimov',
  userName: 'Pavel',
};

const commonFieldProps = {
  required: true,
  fullWidth: true,
  validate: isRequired,
};

type IProps = StylesProps & ITranslateProps;

class EditMainInfo extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <Form onSubmit={this.onSubmit} initialValues={initialValues} subscription={{ submitting: true }}>
        {({ handleSubmit, form }) => (
          <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit} >
              <div className={classes.formContent}>
                <div className={classes.avatarWrapper}>
                  <img className={classes.avatar} src={avatar} />
                </div>
                <div className={classes.fields}>
                  <div className={classes.field}>
                    <TextInputField
                      {...commonFieldProps}
                      name={names.userName}
                      label={t(tKeys.fields.userName.getKey())}
                    />
                  </div>
                  <div className={classes.field}>
                    <TextInputField
                      {...commonFieldProps}
                      name={names.surname}
                      label={t(tKeys.fields.surname.getKey())}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.formButtons}>
                <Button className={classes.formButton} fullWidth type="submit" variant="contained" color="primary">
                  {t(tKeys.submit.getKey())}
                </Button>
                <Button className={classes.formButton} fullWidth onClick={form.reset}>
                  {t(tKeys.cancel.getKey())}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Form>
    );
  }

  @bind
  public onSubmit(data: IFormData) {
    console.log(data);
  }
}

export default (
  i18nConnect(
    provideStyles(EditMainInfo),
  )
);
