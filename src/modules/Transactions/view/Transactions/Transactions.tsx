import * as React from 'react';

import { BaseLayout } from 'modules/shared';
import { CompletedTransactions } from 'shared/view/drafts';

class Transactions extends React.PureComponent {

  public render() {
    return (
      <BaseLayout>
        <CompletedTransactions />
      </BaseLayout>
    );
  }
}

export default Transactions;
