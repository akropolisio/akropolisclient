import * as React from 'react';
import * as cn from 'classnames';
import { NavLink } from 'react-router-dom';

import routes from '../../../routes';
import { StylesProps, provideStyles } from './Menu.style';
import { i18nConnect, ITranslateProps, tKeys } from 'services/i18n';
import { withComponent } from 'shared/helpers';
import { Button } from 'shared/view/elements';

interface IProps {
  viewType: 'row' | 'column';
}

interface IMenuItem {
  to: string;
  label: string;
}

const rowItems: IMenuItem[] = [
  { label: tKeys.shared.menu.dashboard.getKey(), to: routes.demo.dashboard.getRedirectPath() },
  { label: tKeys.shared.menu.marketplace.getKey(), to: routes.demo.marketplace.getRedirectPath() },
];

const columnItems: IMenuItem[] = rowItems.concat([
  { label: tKeys.shared.menu.profile.getKey(), to: routes.demo.profile.getRedirectPath() },
]);

const itemsByType: Record<IProps['viewType'], IMenuItem[]> = {
  column: columnItems,
  row: rowItems,
};

const NavButton = withComponent(NavLink)(Button);

function Menu(props: IProps & StylesProps & ITranslateProps) {
  const { classes, t, viewType } = props;

  const linkClassName = cn(classes.link, {
    [classes.isRowType]: viewType === 'row',
    [classes.isColumnType]: viewType === 'column',
  });

  return (
    <nav className={classes.root}>
      {itemsByType[viewType].map(item => (
        <NavButton
          variant="text"
          key={item.label}
          className={linkClassName}
          activeClassName={classes.isActive}
          to={item.to}
        >
          <span>{t(item.label)}</span>
        </NavButton>
      ))}
    </nav>
  );
}

export { IProps };
export default i18nConnect(provideStyles(Menu));
