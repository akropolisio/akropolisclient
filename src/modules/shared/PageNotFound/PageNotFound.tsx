import * as React from 'react';

import { i18nConnect, ITranslateProps, tKeys } from 'services/i18n';
import { BaseLayout } from 'modules/shared';
import { InjectedAuthRouterProps } from 'shared/helpers/authWrapper';

import { provideStyles, StylesProps } from './PageNotFound.style';

interface IOwnProps {
  linkTo: string;
  viewType: 'row' | 'column';
  onlyIcon?: boolean;
}
type IProps = IOwnProps & StylesProps & ITranslateProps & InjectedAuthRouterProps;

class PageNotFound extends React.PureComponent<IProps> {
  public render() {
    const { classes, t } = this.props;
    return (
      <BaseLayout fullHeight>
        <div className={classes.root}>
          <div className={classes.title}>404.</div>
          <div className={classes.description}>{t(tKeys.shared.pageNotFound.getKey())}</div>
        </div>
      </BaseLayout>
    );
  }
}

export { IProps };
export default i18nConnect(provideStyles(PageNotFound));
