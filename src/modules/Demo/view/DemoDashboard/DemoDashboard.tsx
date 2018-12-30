import * as React from 'react';

import { Dashboard, UserFunds } from 'shared/view/drafts';
import { BaseLayout } from 'modules/shared';

interface IState {
  isOpenModal: boolean;
}

class DemoDashboard extends React.PureComponent<{}, IState> {
  public state = { isOpenModal: false };
  public render() {
    return (
      <BaseLayout>
        <div style={{ marginBottom: '2rem' }}>
          <Dashboard />
        </div>
        <UserFunds />
      </BaseLayout>
    );
  }
}

export default DemoDashboard;
