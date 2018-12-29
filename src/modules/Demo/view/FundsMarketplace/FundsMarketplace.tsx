import * as React from 'react';

import { BaseLayout } from 'modules/shared';
import { FundsList } from 'shared/view/drafts';

class Marketplace extends React.PureComponent {

  public render() {
    return (
      <BaseLayout>
        <FundsList />
      </BaseLayout>
    );
  }

}

export default Marketplace;
