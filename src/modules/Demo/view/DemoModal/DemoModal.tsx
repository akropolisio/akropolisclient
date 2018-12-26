import * as React from 'react';
import { bind } from 'decko';
import { Button } from 'shared/view/elements';

import { SignTransactionModal } from 'shared/view/components';

import QrCode from './QrStub/QrStub';

interface IState {
  isOpenModal: boolean;
}

class DemoModal extends React.PureComponent<{}, IState> {
  public state = { isOpenModal: false };
  public render() {
    return (
      <div style={{ padding: 20 }}>
        <Button onClick={this.openModal} variant="outlined">Show modal</Button>
        <SignTransactionModal QrCode={QrCode} isOpen={this.state.isOpenModal} onClose={this.closeModal} />
      </div>
    );
  }

  @bind
  public openModal() {
    this.setState({ isOpenModal: true });
  }

  @bind
  public closeModal() {
    this.setState({ isOpenModal: false });
  }
}

export default DemoModal;
