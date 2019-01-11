import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { IFund } from 'shared/types/models';
import { Button } from 'shared/view/elements';

import { StylesProps, provideStyles } from './FundCard.style';
import { AsyncGetInFundButton } from 'features/getInFund';

interface IOwnProps {
  fund: IFund;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const tKeysMarketplace = tKeys.modules.marketplace;

class FundCard extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, fund } = this.props;
    const { acronym, title, commission, policy, chosen } = fund;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.acronym}>{acronym}</div>
        </div>
        <div className={classes.content}>
          <div className={classes.title}>
            {title}
          </div>
          <div className={classes.commission}>
            {`${t(tKeysMarketplace.commission.getKey())}: ${commission}`}
          </div>
          <div className={classes.policy}>
            {`${t(tKeysMarketplace.policy.getKey())}: ${policy}`}
          </div>
          {chosen
            ? (
              <Button variant="outlined" color="default" className={classes.selectFundButton}>
                {t(tKeysMarketplace.YouAreInThisFund.getKey())}
              </Button>
            ) : (
              <AsyncGetInFundButton
                fund={fund}
                variant="contained"
                color="primary"
                className={classes.selectFundButton}
              />
            )}
        </div>
      </div >
    );
  }
}

export default i18nConnect(provideStyles(FundCard));
