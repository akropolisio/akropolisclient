import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { IFund } from 'shared/types/models';
import { Search } from 'shared/view/elements/Icons';

import FundCard from '../../components/FundCard/FundCard';
import { StylesProps, provideStyles } from './FundsMarketplace.style';

type IProps = StylesProps & ITranslateProps;

const mocks = { commission: 15, policy: '0x00000000000000000000000' };
const funds: IFund[] = [
  { id: 1, logo: 'st', title: 'Standart life', ...mocks },
  { id: 2, logo: 'th', title: 'The people’s pension', ...mocks, chosen: true },
  { id: 3, logo: 'Zu', title: 'Zurich', ...mocks },
  { id: 4, logo: 'Li', title: 'Libery pension', ...mocks },
];

const tKeysMarketplace = tKeys.modules.marketplace;

class FundsMarketplace extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.title}>
            {t(tKeysMarketplace.fundsMarketplace.getKey())}
          </div>
          <Search color="inherit" className={classes.search} />
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

export default i18nConnect(provideStyles(FundsMarketplace));
