import * as React from 'react';

import { QrCode } from 'shared/view/elements';
type IProps = any;

class SendTransaction extends React.PureComponent<IProps> {
  public render() {
    return (
      <QrCode value="0xE47494379c1d48ee73454C251A6395FDd4F9eb43/0x8f834227000000000000000000000000000000005224" />
    );
  }
}

export default SendTransaction;
