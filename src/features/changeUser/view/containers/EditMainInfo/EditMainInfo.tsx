import * as React from 'react';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';

import { i18nConnect, ITranslateProps, tKeys as allKeys } from 'services/i18n';
import { TextInputField } from 'shared/view/form';
import { isRequired } from 'shared/validators';
import { Button, CircleProgressBar } from 'shared/view/elements';

import avatar from './images/avatar.svg';
import { provideStyles, StylesProps } from './EditMainInfo.style';
import { IAppReduxState } from 'shared/types/app';

import { selectors as userSelectors } from 'services/user';
import { actions, selectors } from './../../../redux';
import { ICommunication } from 'shared/types/redux';
import { IUser } from 'shared/types/models';

const tKeys = allKeys.features.userSettings;

interface IFormData {
  name: string;
  surname: string;
}

const names: { [key in keyof IFormData]: key } = {
  name: 'name',
  surname: 'surname',
};

const commonFieldProps = {
  required: true,
  fullWidth: true,
  validate: isRequired,
};

interface IStateProps {
  loadingUser: ICommunication;
  editingMainInfo: ICommunication;
  user: IUser | null;
}

type ActionProps = typeof actionProps;

type IProps = StylesProps & ActionProps & ITranslateProps & IStateProps;

class EditMainInfo extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, loadingUser, editingMainInfo, user } = this.props;
    return (
      <div className={classes.root}>
        {loadingUser.isRequesting &&
          <div className={classes.preloader}>
            <CircleProgressBar size={80} variant="indeterminate" />
          </div>}
        {!loadingUser.isRequesting && user &&
          <Form
            onSubmit={this.onSubmit}
            initialValues={{ name: user.name, surname: user.surname }}
            subscription={{}}
          >
            {({ handleSubmit, form }) => (
              <form className={classes.form} onSubmit={handleSubmit} >
                <div className={classes.formContent}>
                  <div className={classes.avatarWrapper}>
                    <img className={classes.avatar} src={avatar} />
                  </div>
                  <div className={classes.fields}>
                    <div className={classes.field}>
                      <TextInputField
                        {...commonFieldProps}
                        name={names.name}
                        label={t(tKeys.fields.userName.getKey())}
                        disabled={editingMainInfo.isRequesting}
                      />
                    </div>
                    <div className={classes.field}>
                      <TextInputField
                        {...commonFieldProps}
                        name={names.surname}
                        label={t(tKeys.fields.surname.getKey())}
                        disabled={editingMainInfo.isRequesting}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.formButtons}>
                  <Button
                    disabled={editingMainInfo.isRequesting}
                    className={classes.formButton}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    {t(tKeys.submit.getKey())}
                  </Button>
                  <Button
                    className={classes.formButton}
                    disabled={editingMainInfo.isRequesting}
                    onClick={form.reset}
                    fullWidth
                  >
                    {t(tKeys.cancel.getKey())}
                  </Button>
                </div>
              </form>
            )}
          </Form>
        }
      </div>
    );
  }

  @bind
  public onSubmit(data: IFormData) {
    this.props.editMainInfo({ name: data.name, surname: data.surname });
  }
}

function mapState(state: IAppReduxState): IStateProps {

  return {
    loadingUser: userSelectors.selectCommunication(state, 'loadingUser'),
    editingMainInfo: selectors.selectCommunication(state, 'editingMainInfo'),
    user: userSelectors.selectUser(state),
  };
}

const actionProps = {
  editMainInfo: actions.editMainInfo,
};

export default connect(mapState, actionProps)(
  i18nConnect(
    provideStyles(EditMainInfo),
  ),
);
