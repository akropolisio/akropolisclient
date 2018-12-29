import * as React from 'react';
import { bind } from 'decko';

import { Dashboard } from 'shared/view/drafts';
import { BaseLayout } from 'modules/shared';

interface IState {
  isOpenModal: boolean;
}

class DemoDashboard extends React.PureComponent<{}, IState> {
  public state = { isOpenModal: false };
  public render() {
    return (
      <BaseLayout>
        <Dashboard />
      </BaseLayout>
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

export default DemoDashboard;
