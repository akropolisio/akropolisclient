import * as React from 'react';

import { ITranslateProps, ITranslateFunction } from '../../namespace';
import { TContext } from '../I18nProvider/I18nProvider';

function i18nConnect<TProps>(
  WrappedComponent: React.ComponentType<TProps & ITranslateProps>,
): React.ComponentClass<TProps> {
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class I18nConnector extends React.Component<TProps> {
    public static displayName: string = `I18nConnect(${wrappedComponentName})`;

    public render() {
      return (
        <TContext.Consumer>
          {({ t, locale }) => <WrappedComponent t={t as ITranslateFunction} locale={locale} {...this.props} />}
        </TContext.Consumer>
      );
    }
  }
  return I18nConnector;
}

export { i18nConnect };
