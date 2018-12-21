import * as React from 'react';
import * as cn from 'classnames';
import { bind } from 'decko';
import routes from 'modules/routes';
import { NavLink, Link, withRouter, RouteComponentProps } from 'react-router-dom';
import IconMenu from '@material-ui/icons/Menu';
import IconClose from '@material-ui/icons/Close';

import { provideStyles, StylesProps } from './Header.style';
import { ProfileMenu } from 'shared/view/components';
import * as logo from './images/logo.png';

type LinkName = 'marketplace' | 'dashboard' | 'profile';

const brandRedirectPath = routes.demo.getRoutePath();
const desktopRedirectPaths = {
  dashboard: routes.demo.header.dashboard.getRoutePath(),
  marketplace: routes.demo.header.marketplace.getRoutePath(),
};

const mobileRedirectPaths = {
  ...desktopRedirectPaths,
  profile: routes.demo.header.profile.getRoutePath(),
};

const textForMenuItem: Record<LinkName, string> = {
  dashboard: 'Dashboard',
  marketplace: 'Marketplace',
  profile: 'Profile',
};

type IProps = StylesProps & RouteComponentProps;

interface IState {
  isMenuOpen: boolean;
}

class DesktopHeader extends React.PureComponent<IProps, IState> {
  public state: IState = { isMenuOpen: false };

  public render() {
    const { classes } = this.props;
    const { isMenuOpen } = this.state;
    return (
      <div
        className={cn(classes.root, { [classes.hiddenBottomBorder]: isMenuOpen })}
      >
        <div className={classes.logo}>
          <Link to={brandRedirectPath}>
            <img style={{ height: '100%' }} src={logo} />
          </Link>
        </div>
        <div className={classes.desktopLinks}>
          {Object.keys(desktopRedirectPaths).map((key: 'marketplace' | 'dashboard') => (
            <NavLink
              key={key}
              className={classes.link}
              activeClassName={cn(classes.activeLink, classes.withBorder)}
              to={desktopRedirectPaths[key]}
            >
              <span>{textForMenuItem[key]}</span>
            </NavLink>
          ))}
        </div>
        <div className={classes.profileComponent}><ProfileMenu /></div>
        <div className={classes.toogleMenu} onClick={this.toggleMenu}>
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </div>
        {isMenuOpen && this.renderMenu()}
      </div >
    );
  }

  @bind
  public toggleMenu() {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  }

  @bind
  public closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  public renderMenu() {
    const { classes } = this.props;
    return (
      <div className={classes.mobileMenu}>
        <div className={classes.linksList}>
          {Object.keys(mobileRedirectPaths).map((key: LinkName) => (
            <div key={key} className={classes.listItem}>
              <NavLink
                onClick={this.closeMenu}
                className={classes.link}
                activeClassName={classes.activeLink}
                to={mobileRedirectPaths[key]}
              >
                <span>{textForMenuItem[key]}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { IProps };
export default withRouter(provideStyles(DesktopHeader));
