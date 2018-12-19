import * as React from 'react';
import * as QRCode from 'qrcode.react';

type IProps = QRCode.QRCodeProps;
function QRCodeWrapper(props: IProps) {
  return (
    <QRCode {...props} />
  );
}

export default QRCodeWrapper;
