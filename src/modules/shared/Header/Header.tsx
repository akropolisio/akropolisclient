import * as React from 'react';
import * as cn from 'classnames';
import { bind } from 'decko';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import routes from 'modules/routes';

import { Menu as MenuIcon, Cross } from 'shared/view/elements/Icons';
import { ProfileMenu } from 'shared/view/components';
import { IconButton } from 'shared/view/elements';

import Logo from '../Logo/Logo';
import Menu from './Menu/Menu';
import { provideStyles, StylesProps } from './Header.style';

const brandRedirectPath = routes.demo.getRoutePath();

type IProps = StylesProps & RouteComponentProps;

interface IState {
  isMenuOpen: boolean;
}

class Header extends React.PureComponent<IProps, IState> {
  public state: IState = { isMenuOpen: false };

  public render() {
    const { classes } = this.props;
    const { isMenuOpen } = this.state;
    return (
      <div className={cn(classes.root, { [classes.isMenuOpen]: isMenuOpen })}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <Logo viewType="row" linkTo={brandRedirectPath} />
          </div>
          <div className={classes.desktopMenu}>
            <Menu viewType="row" />
          </div>
          <div className={classes.profileComponent}><ProfileMenu /></div>
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
export default withRouter(provideStyles(Header));
