import * as React from 'react';

import { ListProvider, ShowMoreButton } from 'services/dataProvider';
import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { Search } from 'shared/view/elements/Icons';

import FundCard from '../../components/FundCard/FundCard';
import { StylesProps, provideStyles } from './FundsMarketplace.style';

type IProps = StylesProps & ITranslateProps;

const tKeysMarketplace = tKeys.modules.marketplace;

class FundsMarketplace extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <ListProvider<'fund'> resource="fund">
        {({ items, loading, pagination }) => (
          <div className={classes.root}>
            <div className={classes.header}>
              <div className={classes.title}>
                {t(tKeysMarketplace.fundsMarketplace.getKey())}
              </div>
              <Search color="inherit" className={classes.search} />
            </div>
            <div className={classes.content}>
              {items.map(fund => (
                <div key={fund.id} className={classes.fundCard}>
                  <FundCard fund={fund} />
                </div>
              ))}
            </div>
            <ShowMoreButton fullWidth pagination={pagination} loading={loading} />
          </div>
        )}
      </ListProvider>
    );
  }
}

export default i18nConnect(provideStyles(FundsMarketplace));
