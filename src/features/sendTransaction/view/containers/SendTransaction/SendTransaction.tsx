import * as React from 'react';
import * as uuidv4 from 'uuid/v4';
import Web3 = require('web3');

import { QrCode } from 'shared/view/elements';
type IProps = any;

class SendTransaction extends React.PureComponent<IProps> {
  public render() {
    const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/<TOKEN>"));
    console.log(web3);
    const tranzactionID = uuidv4();
    return (
      <QrCode value="0xE47494379c1d48ee73454C251A6395FDd4F9eb43/0x8f834227000000000000000000000000000000005224" />
    );
  }
}

export default SendTransaction;
