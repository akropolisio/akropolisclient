import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { toFixed } from 'shared/helpers/integer';
import { Button } from 'shared/view/elements';

import { StylesProps, provideStyles } from './FundCard.style';
import { IUserFund } from '../../namespace';

interface IOwnProps {
  fund: IUserFund;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const tKeysFunds = tKeys.features.funds;

class FundCard extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, fund: { acronym, title, policy, pensionDate, type, totalSum, incomeMonthly } } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.description}>
          <div className={classes.acronym}>{acronym}</div>
          <div className={classes.information}>
            <div className={classes.title}>{title}</div>
            <div className={classes.pensionInformationFields}>
              <div className={classes.type}>{type}</div>
              <div className={classes.policy}>
                {`${t(tKeysFunds.policy.getKey())}: ${policy}`}
              </div>
            </div>
            <div className={classes.pensionDate}>
              {`${t(tKeysFunds.pensionDate.getKey())}: ${pensionDate}`}
            </div>
          </div>
        </div>
        <div className={classes.metrics}>
          <div className={classes.metric}>
            <div className={classes.metricName}>{`${t(tKeysFunds.totalSum.getKey())}:`}</div>
            <div className={classes.metricValue}>{`$${toFixed(totalSum, 3)}`}</div>
          </div>
          <div className={classes.metric}>
            <div className={classes.metricName}>{`${t(tKeysFunds.incomeMonthly.getKey())}:`}</div>
            <div className={classes.metricValue}>{`$${toFixed(incomeMonthly, 3)}`}</div>
          </div>
          <div className={classes.deposit}>
            <Button fullWidth variant="contained" color="primary" className={classes.depositButton}>
              {t(tKeysFunds.deposit.getKey())}
            </Button>
          </div>
        </div>
      </div >
    );
  }
}

export default i18nConnect(provideStyles(FundCard));
