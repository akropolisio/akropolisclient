import * as React from 'react';
import * as cn from 'classnames';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import routes from 'modules/routes';

import { Adaptive } from 'services/adaptability';
import { selectors, AccountAddress } from 'services/user';
import { SignInButton } from 'features/signIn';

import { IAppReduxState } from 'shared/types/app';
import { Menu as MenuIcon, Cross } from 'shared/view/elements/Icons';
import { IconButton } from 'shared/view/elements';

import Logo from '../Logo/Logo';
import Menu from './Menu/Menu';
import { provideStyles, StylesProps } from './Header.style';
import ShowBalance from './ShowBalance/ShowBalance';

const brandRedirectPath = routes.dashboard.getRoutePath();

interface IStateProps {
  isLogged: boolean;
}

type IProps = IStateProps & StylesProps & RouteComponentProps;

interface IState {
  isMenuOpen: boolean;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    isLogged: selectors.selectIsLogged(state),
  };
}

class Header extends React.PureComponent<IProps, IState> {
  public state: IState = { isMenuOpen: false };

  public render() {
    const { classes, isLogged } = this.props;
    const { isMenuOpen } = this.state;
    return (
      <div className={cn(classes.root, { [classes.isMenuOpen]: isMenuOpen })}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <Adaptive to="sm">
              <Logo viewType="row" linkTo={brandRedirectPath} />
            </Adaptive>
            <Adaptive from="sm" to="md">
              <Logo onlyIcon viewType="row" linkTo={brandRedirectPath} />
            </Adaptive>
            <Adaptive from="md">
              <Logo viewType="row" linkTo={brandRedirectPath} />
            </Adaptive>
          </div>
          <div className={classes.desktopMenu}>
            <Menu viewType="row" />
          </div>
          <div className={classes.accountStatus}>
            {isLogged ? <><ShowBalance /><AccountAddress /></> : <SignInButton />}
          </div>
          <IconButton className={classes.toggleMenuButton} onClick={this.toggleMenu}>
            {isMenuOpen ? <Cross /> : <MenuIcon />}
          </IconButton>
          <div className={cn(classes.mobileMenu, { [classes.isMenuOpen]: isMenuOpen })}>
            <Menu viewType="column" />
          </div>
        </div>
      </div >
    );
  }

  @bind
  public toggleMenu() {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  }
}

export { IProps };
export default (
  withRouter(
    connect(mapState)(
      provideStyles(Header),
    ),
  )
);
