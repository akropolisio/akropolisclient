import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';

import routes from 'modules/routes';
import { tKeys as tkeysAll, i18nConnect, ITranslateProps } from 'services/i18n';

import { UserRole } from 'shared/types/models';
import { Button } from 'shared/view/elements';
import { withComponent } from 'shared/helpers/react';

import { StylesProps, provideStyles } from './Profile.style';
import { BaseLayout } from 'modules/shared';

const tKeys = tkeysAll.modules.profile;

type IProps = RouteComponentProps<{ role: UserRole }> & StylesProps & ITranslateProps;

const NavButton = withComponent(NavLink)(Button);

const links = [
  { link: routes.profile.settings.getRoutePath(), title: tKeys.settings.getKey() },
  { link: routes.profile.contributors.getRoutePath(), title: tKeys.contributors.getKey() },
  { link: routes.profile.heirs.getRoutePath(), title: tKeys.heirs.getKey(), disabled: true },
];

class Profile extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, children } = this.props;
    return (
      <BaseLayout background="primary">
        <div className={classes.root}>
          <div className={classes.title}>{t(tKeys.title.getKey())}</div>
          <nav className={classes.sectionsMenu}>
            {links.map(({ link, title, disabled }, index: number) => (
              <NavButton
                disabled={disabled}
                key={index}
                to={link}
                className={classes.sectionLink}
                activeClassName={classes.isActive}
              >
                <span>{t(title)}</span>
              </NavButton>
            ))}
          </nav>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </BaseLayout>
    );
  }
}

export default withRouter(i18nConnect(provideStyles(Profile)));
