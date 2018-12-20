import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { provideStyles, StylesProps } from './Header.style';

import * as logo from './images/logo.png';

type LinkName = 'marketplace' | 'dashboard';

interface IProps {
  children?: React.ReactNode;
  brandRedirectPath: string;
  menuRedirectPaths: Record<LinkName, string>;
}

const textForMenuItem: Record<LinkName, string> = {
  dashboard: 'Dashboard',
  marketplace: 'Marketplace',
};

class Header extends React.PureComponent<IProps & StylesProps> {
  public render() {
    const { classes, brandRedirectPath, menuRedirectPaths } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.logo}>
          <Link className={classes.link} to={brandRedirectPath}>
            <img style={{ height: '100%' }} src={logo} />
          </Link>
        </div>
        {Object.keys(menuRedirectPaths).map((key: LinkName) => (
          <NavLink
            key={key}
            className={classes.link}
            activeClassName={classes.activeLink}
            to={menuRedirectPaths[key]}
          >
            <span>{textForMenuItem[key]}</span>
          </NavLink>
        ))}
      </div >
    );
  }
}

export { IProps };
export default provideStyles(Header);
