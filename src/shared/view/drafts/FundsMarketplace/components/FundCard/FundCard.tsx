import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { IFund } from 'shared/types/models';
import { Button } from 'shared/view/elements';

import { StylesProps, provideStyles } from './FundCard.style';
import { AsyncGetInFundButton } from 'features/getInFund';
import { Fund, FundLogo } from 'shared/view/model';

interface IOwnProps {
  fund: IFund;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const tKeysMarketplace = tKeys.modules.marketplace;

class FundCard extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, fund } = this.props;
    const { chosen } = fund;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <FundLogo fund={fund} />
        </div>
        <div className={classes.content}>
          <Fund fund={fund} />
        </div>
        <div className={classes.actions}>
          {chosen
            ? (
              <Button fullWidth variant="outlined" color="default">
                {t(tKeysMarketplace.YouAreInThisFund.getKey())}
              </Button>
            ) : (
              <AsyncGetInFundButton
                fullWidth
                fund={fund}
                variant="contained"
                color="primary"
              />
            )}
        </div>
      </div >
    );
  }
}

export default i18nConnect(provideStyles(FundCard));
