import * as React from 'react';

import { BaseLayout } from 'modules/shared';
import { CompletedTransactions } from 'features/showTransactions';
import { InjectedAuthRouterProps } from 'shared/helpers/authWrapper';

type IProps = InjectedAuthRouterProps;
class Transactions extends React.PureComponent<IProps> {

  public render() {
    return (
      <BaseLayout>
        <CompletedTransactions />
      </BaseLayout>
    );
  }
}

export default Transactions;
