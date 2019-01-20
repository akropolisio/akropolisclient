import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { userFundsMock } from 'shared/helpers/mocks';

import { StylesProps, provideStyles } from './UserFunds.style';
import { FundCard, EmptyFunds } from '../../components';
import { ListProvider, ShowMoreButton } from 'services/dataProvider';
import { CircleProgressBar } from 'shared/view/elements';

interface IOwnProps {
  onRedirectToMarketplace(): void;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const tKeysFunds = tKeys.features.funds;

class UserFunds extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, onRedirectToMarketplace } = this.props;
    return (
      <ListProvider<'userFund'> resource="userFund">
        {({ items, pagination, loading }) => (
          <div className={classes.root}>
            <div className={classes.title}>
              {t(tKeysFunds.activeFunds.getKey())}
            </div>
            <div className={classes.content}>
              {items.length === 0 && loading && (
                <div className={classes.preloader}>
                  <CircleProgressBar size={80} variant="indeterminate" />
                </div>
              )}
              {items.length === 0 && !loading && (
                <EmptyFunds onFindFund={onRedirectToMarketplace} />
              )}
              {items.length !== 0 && (<>
                {items.map(fund => (
                  <div key={fund.id} className={classes.fundCard}>
                    <FundCard fund={fund} />
                  </div>
                ))}
                <ShowMoreButton fullWidth pagination={pagination} loading={loading} />
              </>)}
            </div>
          </div>
        )}
      </ListProvider>
    );
  }
}

export default i18nConnect(provideStyles(UserFunds));
