import * as React from 'react';

import { i18nConnect, tKeys, ITranslateProps } from 'services/i18n';
import { userFundsMock } from 'shared/helpers/mocks';

import { StylesProps, provideStyles } from './UserFunds.style';
import { FundCard, EmptyFunds } from '../../components';

interface IOwnProps {
  onRedirectToMarketplace(): void;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

const tKeysFunds = tKeys.features.funds;

class UserFunds extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, onRedirectToMarketplace } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          {t(tKeysFunds.activeFunds.getKey())}
        </div>
        <div className={classes.content}>
          {userFundsMock && userFundsMock.length !== 0 ?
            userFundsMock.map(fund => (
              <div key={fund.title} className={classes.fundCard}>
                <FundCard fund={fund} />
              </div>
            )) :
            <EmptyFunds onFindFund={onRedirectToMarketplace} />
          }
        </div>
      </div>
    );
  }
}

export default i18nConnect(provideStyles(UserFunds));
