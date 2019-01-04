import * as React from 'react';

import { BaseLayout } from 'modules/shared';
import { FundsMarketplace } from 'shared/view/drafts';

class Marketplace extends React.PureComponent {

  public render() {
    return (
      <BaseLayout>
        <FundsMarketplace />
      </BaseLayout>
    );
  }

}

export default Marketplace;
