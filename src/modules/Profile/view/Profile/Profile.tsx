import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import routes from 'modules/routes';
import { tKeys as tkeysAll, i18nConnect, ITranslateProps } from 'services/i18n';

import { withComponent } from 'shared/helpers/react';
import { InjectedAuthRouterProps } from 'shared/helpers/authWrapper';
import { ToggleButtonGroup, ToggleButton } from 'shared/view/elements';
import { Contributors } from 'shared/view/drafts';
import { AsyncEditMainInfo } from 'features/changeUser';

import { StylesProps, provideStyles } from './Profile.style';
import { BaseLayout } from 'modules/shared';

const tKeys = tkeysAll.modules.profile;

const NavToggleButton = withComponent(Link)(ToggleButton);

type Section = 'settings' | 'contributors' | 'heirs';

interface ISectionLink {
  section: Section;
  title: string;
  disabled?: boolean;
}

const links: ISectionLink[] = [
  { section: 'settings', title: tKeys.settings.getKey() },
  { section: 'contributors', title: tKeys.contributors.getKey() },
  { section: 'heirs', title: tKeys.heirs.getKey(), disabled: true },
];

type IProps = InjectedAuthRouterProps & RouteComponentProps<{ section: Section }> & StylesProps & ITranslateProps;

class Profile extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, match: { params: { section: selectedSection } } } = this.props;
    return (
      <BaseLayout background="primary">
        <div className={classes.root}>
          <div className={classes.title}>{t(tKeys.title.getKey())}</div>
          <ToggleButtonGroup value={selectedSection} exclusive nullable={false} >
            {links.map(({ section, title, disabled }, index: number) => (
              <NavToggleButton
                className={classes.sectionLink}
                disabled={disabled}
                key={index}
                to={routes.profile.section.getRedirectPath({ section })}
                variant="outlined"
                value={section}
              >
                <span>{t(title)}</span>
              </NavToggleButton>
            ))}
          </ToggleButtonGroup>
          <div className={classes.content}>
            {selectedSection === 'settings' && <AsyncEditMainInfo />}
            {selectedSection === 'contributors' && <Contributors />}
          </div>
        </div>
      </BaseLayout>
    );
  }
}

export default withRouter(i18nConnect(provideStyles(Profile)));
