import * as React from 'react';

import { i18nConnect, ITranslateProps, tKeys } from 'services/i18n';

import Modal from '../Modal/Modal';
import { provideStyles, StylesProps } from './SignTransactionModal.style';
import * as phone from './images/phone.png';
import googlePlay from './images/googlePlay.svg';
import appstore from './images/appstore.svg';

const tKeysSign = tKeys.features.signTransaction;

interface IOwnProps {
  isOpen: boolean;
  QrCode: React.ComponentType;
  onClose(): void;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

class SignTransactionModal extends React.Component<IProps> {

  public render() {
    const { classes, onClose, isOpen, QrCode, t } = this.props;
    return (
      <Modal withCross size="large" onClose={onClose} isOpen={isOpen}>
        <div className={classes.root}>
          <div className={classes.title}>{t(tKeysSign.title.getKey())}</div>
          <div className={classes.description}>{t(tKeysSign.description.getKey())}</div>
          <div className={classes.scanQrCode}>
            <img className={classes.phone} src={phone} />
            <div className={classes.qrCode}><QrCode /></div>
          </div>
          <div className={classes.linksToMarket}>
            <a href={'#'} className={classes.link}><img className={classes.image} src={appstore} /></a>
            <a href={'#'} className={classes.link}><img className={classes.image} src={googlePlay} /></a>
          </div>
        </div>
      </Modal>
    );
  }
}

export { IProps };
export default i18nConnect(provideStyles(SignTransactionModal));
