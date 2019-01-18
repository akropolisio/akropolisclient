import * as React from 'react';

import { SignTransactionButton } from 'services/signTransaction';
import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { IUserFund } from 'shared/types/models';
import { formatUSDAmount } from 'shared/helpers/format';

import { StylesProps, provideStyles } from './FundCard.style';

interface IOwnProps {
  fund: IUserFund;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const tKeysFunds = tKeys.features.funds;

class FundCard extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, fund: { acronym, title, policy, pensionDate, type, totalSum, incomeMonthly, id } } = this.props;
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
            <div className={classes.metricValue}>{`${formatUSDAmount(totalSum)}`}</div>
          </div>
          <div className={classes.metric}>
            <div className={classes.metricName}>{`${t(tKeysFunds.incomeMonthly.getKey())}:`}</div>
            <div className={classes.metricValue}>{`${formatUSDAmount(incomeMonthly)}`}</div>
          </div>
          <div className={classes.deposit}>
            <SignTransactionButton
              transactionType="depositToFund"
              data={{ fundId: id }}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.depositButton}
            >
              {t(tKeysFunds.deposit.getKey())}
            </SignTransactionButton>
          </div>
        </div>
      </div >
    );
  }
}

export default i18nConnect(provideStyles(FundCard));
