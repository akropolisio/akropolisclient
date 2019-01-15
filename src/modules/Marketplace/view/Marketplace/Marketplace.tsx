import * as React from 'react';

import { BaseLayout } from 'modules/shared';
import { FundsMarketplace } from 'shared/view/drafts';
import { InjectedAuthRouterProps } from 'shared/helpers/authWrapper';

type IProps = InjectedAuthRouterProps;

class Marketplace extends React.PureComponent<IProps> {

  public render() {
    return (
      <BaseLayout>
        <FundsMarketplace />
      </BaseLayout>
    );
  }

}

export default Marketplace;