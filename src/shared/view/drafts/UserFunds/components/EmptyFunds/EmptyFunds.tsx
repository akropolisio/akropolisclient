import * as React from 'react';

import { i18nConnect, ITranslateProps, tKeys as tKeysAll } from 'services/i18n';
import { Button } from 'shared/view/elements';

import { provideStyles, StylesProps } from './EmptyFunds.style';
import emptyFundSrc from './images/emptyFund.svg';

const tKeys = tKeysAll.features.funds;

interface IOwnProps {
  onFindFund(): void;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

class EmptyFunds extends React.Component<IProps> {

  public render() {
    const { classes, t, onFindFund } = this.props;
    return (
      <div className={classes.root}>
        <img className={classes.emptyFund} src={emptyFundSrc} />
        <div className={classes.title}>{t(tKeys.noFunds.getKey())}</div>
        <div className={classes.description}>{t(tKeys.findFundsAtMarket.getKey())}</div>
        <Button onClick={onFindFund} variant="outlined" color="primary" className={classes.findFundButton}>
          {t(tKeys.findFunds.getKey())}
        </Button>
      </div>
    );
  }
}

export { IProps };
export default i18nConnect(provideStyles(EmptyFunds));
