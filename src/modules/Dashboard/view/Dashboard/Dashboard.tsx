import * as React from 'react';
import { bind } from 'decko';
import { withRouter, RouteComponentProps } from 'react-router';

import { InjectedAuthRouterProps } from 'shared/helpers/authWrapper';
import { Dashboard } from 'features/manageDashboard';
import { UserFunds } from 'features/manageFunds';
import { BaseLayout } from 'modules/shared';
import { i18nConnect, ITranslateProps, tKeys as tKeysAll } from 'services/i18n';
import { Button } from 'shared/view/elements';

import { provideStyles, StylesProps } from './Dashboard.style';
import routes from 'modules/routes';

const tKeysDashboard = tKeysAll.modules.dashboard;

type IProps = StylesProps & ITranslateProps & RouteComponentProps<{}> & InjectedAuthRouterProps;
class DemoDashboard extends React.PureComponent<IProps> {
  public render() {
    const { classes, t } = this.props;
    return (
      <BaseLayout>
        <div className={classes.dashboard}>
          <div className={classes.header}>
            <div className={classes.title}>{t(tKeysDashboard.dashboard.getKey())}</div>
            <Button
              onClick={this.redirectToTransactions}
              className={classes.transactionsButton}
              variant="outlined"
              color="primary"
            >
              {t(tKeysDashboard.transactions.getKey())}
            </Button>
          </div>
          <Dashboard />
        </div>
        <UserFunds onRedirectToMarketplace={this.redirectToMarketplace} />
      </BaseLayout>
    );
  }

  @bind
  public redirectToTransactions() {
    this.props.history.push(routes.transactions.getRedirectPath());
  }

  @bind
  public redirectToMarketplace() {
    this.props.history.push(routes.marketplace.getRedirectPath());
  }
}

export default withRouter(i18nConnect(provideStyles(DemoDashboard)));
