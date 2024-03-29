import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { Search } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './FundsList.style';
import { IFund } from '../../namespace';
import FundCard from '../../components/FundCard/FundCard';

type IProps = StylesProps & ITranslateProps;

const mocks = { commission: 15, policy: '0x00000000000000000000000' };
const funds: IFund[] = [
  { acronym: 'st', title: 'Standart life', ...mocks },
  { acronym: 'th', title: 'The people’s pension', ...mocks, chosen: true },
  { acronym: 'Zu', title: 'Zurich', ...mocks },
  { acronym: 'Li', title: 'Libery pension', ...mocks },
];

const tKeysMarketplace = tKeys.modules.marketplace;

class FundsList extends React.PureComponent<IProps> {

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

export default i18nConnect(provideStyles(FundsList));
