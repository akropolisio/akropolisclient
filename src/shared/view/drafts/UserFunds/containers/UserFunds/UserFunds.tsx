import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';

import { StylesProps, provideStyles } from './UserFunds.style';
import { IUserFund } from '../../namespace';
import FundCard from '../../components/FundCard/FundCard';

type IProps = StylesProps & ITranslateProps;

const mocks = {
  type: 'State pension', policy: '23313445',
  pensionDate: 'Dec 2022', totalSum: 11343.31, incomeMonthly: 343.31,
};
const funds: IUserFund[] = [
  { acronym: 'st', title: 'Standart life', ...mocks },
  { acronym: 'th', title: 'The people’s pension', ...mocks },
  { acronym: 'Zu', title: 'Zurich', ...mocks },
  { acronym: 'Li', title: 'Libery pension', ...mocks },
];

const tKeysFunds = tKeys.features.funds;

class UserFunds extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          {t(tKeysFunds.activeFunds.getKey())}
        </div>
        <div className={classes.content}>
          {funds.map(fund => (
            <div key={fund.title} className={classes.fundCard}>
              <FundCard fund={fund} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default i18nConnect(provideStyles(UserFunds));
