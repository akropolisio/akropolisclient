import * as React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import { provideStyles, StylesProps } from './SignTransactionModal.style';
import * as phone from './images/phone.png';
import googlePlay from './images/googlePlay.svg';
import appstore from './images/appstore.svg';

interface IOwnProps {
  isOpen: boolean;
  QrCode: React.ComponentType;
  onClose(): void;
}

type IProps = IOwnProps & StylesProps;

class SignTransactionModal extends React.Component<IProps> {

  public render() {
    const { classes, onClose, isOpen, QrCode } = this.props;
    return (
      <Modal withCross size="large" onClose={onClose} isOpen={isOpen}>
        <div className={classes.root}>
          <div className={classes.title}>Sign transaction</div>
          <div className={classes.description}>
            Scan this QR code with your mobile device to continue transaction
          </div>
          <div className={classes.scanQrCode}>
            <img className={classes.phone} src={phone} />
            <div className={classes.qrCode}><QrCode /></div>
          </div>
          <div className={classes.linksToMarket}>
            <Link to={'#'} className={classes.link}><img className={classes.image} src={appstore} /></Link>
            <Link to={'#'} className={classes.link}><img className={classes.image} src={googlePlay} /></Link>
          </div>
        </div>
      </Modal>
    );
  }
}

export { IProps };
export default provideStyles(SignTransactionModal);
