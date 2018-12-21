import * as React from 'react';
import * as cn from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import { bind } from 'decko';
import IconMenu from '@material-ui/icons/Menu';
import IconClose from '@material-ui/icons/Close';

import { provideStyles, StylesProps } from './MobileHeader.style';
import * as logo from './images/logo.png';

type LinkName = 'marketplace' | 'dashboard' | 'profile';

interface IOwnProps {
  children?: React.ReactNode;
  brandRedirectPath: string;
  menuRedirectPaths: Record<LinkName, string>;
}

type IProps = IOwnProps & StylesProps;

interface IState {
  isMenuOpen: boolean;
}

const textForMenuItem: Record<LinkName, string> = {
  dashboard: 'Dashboard',
  marketplace: 'Marketplace',
  profile: 'Profile',
};

class MobileHeader extends React.PureComponent<IProps, IState> {
  public state: IState = { isMenuOpen: false };
  public render() {
    const { classes, brandRedirectPath } = this.props;
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

  public renderMenu() {
    const { classes, menuRedirectPaths } = this.props;
    return (
      <div className={classes.menu}>
        <div className={classes.linksList}>
          {Object.keys(menuRedirectPaths).map((key: LinkName) => (
            <div className={classes.listItem}>
              <NavLink
                key={key}
                className={classes.link}
                activeClassName={classes.activeLink}
                to={menuRedirectPaths[key]}
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
export default provideStyles(MobileHeader);
