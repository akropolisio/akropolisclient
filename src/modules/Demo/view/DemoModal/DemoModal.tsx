import * as React from 'react';
import { bind } from 'decko';
import { Button } from 'shared/view/elements';

import { Modal } from 'shared/view/components';

type ModalType = 'small' | 'medium' | 'large' | 'with-scroll';

interface IState {
  openedModal: ModalType | null;
}

// tslint:disable-next-line:max-line-length
const stub = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec libero finibus, aliquet sapien eget, auctor lectus. Sed posuere interdum ex, et facilisis nulla varius non. Cras ac nunc cursus, fermentum urna ut, feugiat elit. Vestibulum vel enim interdum, luctus tellus eu, semper erat. Pellentesque eu enim nec tellus euismod vehicula vel id turpis. Pellentesque nibh lorem, vehicula non lobortis in, egestas vitae sapien. Integer elit justo, sagittis ut felis eu, commodo maximus ipsum. Vivamus id rutrum ex, nec feugiat velit. Praesent a purus leo. Phasellus vitae cursus ante, non commodo felis. Aenean in nisi vehicula enim ullamcorper faucibus at sit amet velit.';

class DemoModal extends React.PureComponent<{}, IState> {
  public state: IState = { openedModal: null };
  public render() {
    return (
      <div style={{ padding: 20 }}>
        <Button onClick={this.openModal.bind(null, 'small')} variant="outlined">Show small modal</Button>
        <Button onClick={this.openModal.bind(null, 'medium')} variant="outlined">Show medium modal</Button>
        <Button onClick={this.openModal.bind(null, 'large')} variant="outlined">Show large modal</Button>
        <Button onClick={this.openModal.bind(null, 'with-scroll')} variant="outlined">
          Show medium modal with scroll
        </Button>
        <Modal size="small" isOpen={this.state.openedModal === 'small'} onClose={this.closeModal}>
          <p style={{ margin: 20 }}>{stub}</p>
        </Modal>
        <Modal size="medium" isOpen={this.state.openedModal === 'medium'} onClose={this.closeModal}>
          <p style={{ margin: 20 }}>{stub}</p>
        </Modal>
        <Modal size="large" isOpen={this.state.openedModal === 'large'} onClose={this.closeModal}>
          <p style={{ margin: 20 }}>{stub}</p>
        </Modal>
        <Modal size="medium" isOpen={this.state.openedModal === 'with-scroll'} onClose={this.closeModal}>
          {Array.from({ length: 5 }).map((_, index) => (
            <p key={index} style={{ margin: 20 }}>{stub}</p>
          ))}
        </Modal>
      </div>
    );
  }

  @bind
  public openModal(type: ModalType) {
    this.setState({ openedModal: type });
  }

  @bind
  public closeModal() {
    this.setState({ openedModal: null });
  }
}

export default DemoModal;
