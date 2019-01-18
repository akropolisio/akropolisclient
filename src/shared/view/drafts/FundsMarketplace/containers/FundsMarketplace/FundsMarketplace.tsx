import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { Search } from 'shared/view/elements/Icons';

import FundCard from '../../components/FundCard/FundCard';
import { StylesProps, provideStyles } from './FundsMarketplace.style';
import { fundsMock } from 'shared/helpers/mocks';
import { ListProvider } from 'services/dataProvider';

type IProps = StylesProps & ITranslateProps;

const tKeysMarketplace = tKeys.modules.marketplace;

class FundsMarketplace extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <ListProvider<'fund'> resource="fund" perPage={10}>
        {({ items, loading, pagination, sort, error }) => (
          <div className={classes.root}>
            <div className={classes.header}>
              <div className={classes.title}>
                {loading && 'Loading...'}
                {error && `Error: ${error}`}
                {!loading && !error && t(tKeysMarketplace.fundsMarketplace.getKey())}
              </div>
              <Search color="inherit" className={classes.search} />
            </div>
            <div className={classes.content}>
              {items.map(fund => (
                <div key={fund.title} className={classes.fundCard}>
                  <FundCard fund={fund} />
                </div>
              ))}
            </div>
          </div>
        )}
      </ListProvider>
    );
  }
}

export default i18nConnect(provideStyles(FundsMarketplace));
