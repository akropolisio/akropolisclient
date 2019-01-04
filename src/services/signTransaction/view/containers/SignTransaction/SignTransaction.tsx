import * as React from 'react';
import { connect } from 'react-redux';

import { i18nConnect, ITranslateProps, tKeys } from 'services/i18n';

import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';
import { QRCode, CircleProgressBar } from 'shared/view/elements';

import * as selectors from '../../../redux/selectors';
import { IQRCodeData } from '../../../namespace';
import { provideStyles, StylesProps } from './SignTransaction.style';
import * as phone from './images/phone.png';
import googlePlay from './images/googlePlay.svg';
import appstore from './images/appstore.svg';

const tKeysSign = tKeys.features.signTransaction;

interface IStateProps {
  abiGenerating: ICommunication;
  qrCodeData: IQRCodeData | null;
}

type IProps = IStateProps & StylesProps & ITranslateProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    abiGenerating: selectors.selectCommunication(state, 'abiGeneration'),
    qrCodeData: selectors.selectQRCodeData(state),
  };
}

class SignTransaction extends React.Component<IProps> {
  public render() {
    const { classes, t, qrCodeData, abiGenerating } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>{t(tKeysSign.title.getKey())}</div>
        <div className={classes.description}>{t(tKeysSign.description.getKey())}</div>
        <div className={classes.scanQrCode}>
          <img className={classes.phone} src={phone} />
          <div className={classes.qrCode}>
            {abiGenerating.isRequesting
              ? <CircleProgressBar variant="indeterminate" size={100} value={85} />
              : <QRCode value={JSON.stringify(qrCodeData)} />
            }
          </div>
        </div>
        <div className={classes.linksToMarket}>
          <a href={'#'} className={classes.link}><img className={classes.image} src={appstore} /></a>
          <a href={'#'} className={classes.link}><img className={classes.image} src={googlePlay} /></a>
        </div>
      </div>
    );
  }
}

export { IProps };
export default (
  connect(mapState)(
    i18nConnect(provideStyles(SignTransaction)),
  )
);
