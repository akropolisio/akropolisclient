import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { Button } from 'shared/view/elements';

import { StylesProps, provideStyles } from './FundCard.style';
import { IFund } from '../../namespace';

interface IOwnProps {
  fund: IFund;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const tKeysMarketplace = tKeys.modules.marketplace;

class FundCard extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, fund: { acronym, title, commission, policy, chosen } } = this.props;
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
          <Button
            variant={chosen ? 'outlined' : 'contained'}
            color={chosen ? 'default' : 'primary'}
            className={classes.selectFundButton}
          >
            {
              chosen ?
                t(tKeysMarketplace.YouAreInThisFund.getKey())
                :
                t(tKeysMarketplace.getInFund.getKey())}
          </Button>
        </div>
      </div >
    );
  }
}

export default i18nConnect(provideStyles(FundCard));
