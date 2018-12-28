import * as React from 'react';

import { StylesProps, provideStyles } from './SignUpModal.style';
import { GetProps, Omit } from '_helpers';
import { Modal } from 'shared/view/components';
import SignUpForm, { IOwnProps as IFormOwnProps } from '../SignUpForm/SignUpForm';
import { tKeys, ITranslateProps, i18nConnect } from 'services/i18n';

type IProps = Omit<GetProps<typeof Modal>, 'classes' | 'title'> & IFormOwnProps & ITranslateProps & StylesProps;

function SignUpModal(props: IProps) {
  const { classes, role, onSuccess, t, locale, ...modalProps } = props;
  return (
    <Modal {...modalProps} withCross title={t(tKeys.features.signUp.title.getKey())}>
      <div className={classes.root}>
        <SignUpForm role={role} onSuccess={onSuccess} />
      </div>
    </Modal>
  );
}

export default (
  provideStyles(
    i18nConnect(SignUpModal),
  )
);
