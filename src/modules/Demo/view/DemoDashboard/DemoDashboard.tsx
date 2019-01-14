import * as React from 'react';
import { bind } from 'decko';
import { withRouter, RouteComponentProps } from 'react-router';

import { Dashboard, UserFunds } from 'shared/view/drafts';
import { BaseLayout } from 'modules/shared';
import { i18nConnect, ITranslateProps, tKeys as tKeysAll } from 'services/i18n';
import { Button } from 'shared/view/elements';

import { provideStyles, StylesProps } from './DemoDashboard.style';
import routes from 'modules/routes';

const tKeysDashboard = tKeysAll.modules.dashboard;
interface IState {
  isOpenModal: boolean;
}

type IProps = StylesProps & ITranslateProps & RouteComponentProps<{}>;
class DemoDashboard extends React.PureComponent<IProps, IState> {
  public state = { isOpenModal: false };
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
    this.props.history.push(routes.demo.marketplace.getRedirectPath());
  }
}

export default withRouter(i18nConnect(provideStyles(DemoDashboard)));
