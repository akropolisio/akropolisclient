import * as React from 'react';
import { connect } from 'react-redux';
import * as Polyglot from 'node-polyglot';

import { IAppReduxState } from 'shared/types/app';
import { withProps } from 'shared/helpers/react';

import { ITranslateFunction, Lang } from '../../namespace';
import * as selectors from '../../redux/selectors';
import { DEFAULT_LANGUAGE } from '../../constants';
import { phrasesByLocale as phrases } from '../../locales';

/**
 * It is a localization service for whole app.
 * It will be injected inside all classes (including React components) and
 * provide public methods for translation and localization.
 *
 * For passing translate functional inside low level components use getTranslator function,
 * cause it needs to rerender component, when locale will change, and getTranslator will
 * care about rerender components when it needs.
 *
 * For other cases you can use Translate component, or translate api function, defined in this service.
 */

const polyglot: Polyglot = new Polyglot({
  locale: DEFAULT_LANGUAGE,
  phrases: phrases[DEFAULT_LANGUAGE],
});

export const TContext = React.createContext({
  t: polyglot.t.bind(polyglot),
  locale: DEFAULT_LANGUAGE,
});

interface IOwnProps {
  phrasesByLocale: typeof phrases;
}

interface IStateprops {
  locale: Lang;
}
type IProps = IStateprops & IOwnProps;
class I18nProvider extends React.PureComponent<IProps> {
  public polyglot: Polyglot = new Polyglot({
    locale: DEFAULT_LANGUAGE,
    phrases: this.props.phrasesByLocale[DEFAULT_LANGUAGE],
  });

  public state = { translator: this.polyglot.t.bind(this.polyglot) as ITranslateFunction };
  public get locale(): Lang {
    return (this.polyglot.locale() as Lang);
  }

  public get t(): ITranslateFunction {
    return this.state.translator;
  }

  public componentDidUpdate(prevProps: IProps) {
    const { locale, phrasesByLocale } = this.props;
    if (prevProps.locale !== locale || prevProps.phrasesByLocale !== phrasesByLocale) {
      this.polyglot.locale(locale);
      this.polyglot.replace(phrasesByLocale[locale]);
      this.setState({ translator: this.polyglot.t.bind(this.polyglot) });
    }
  }

  public render() {
    const { children, locale } = this.props;
    return <TContext.Provider value={{ t: this.state.translator, locale }}>{children}</TContext.Provider>;
  }
}

function mapState(state: IAppReduxState) {
  return {
    locale: selectors.selectCurrentLocale(state),
  };
}

export default (
  withProps(
    connect(mapState)(I18nProvider), { phrasesByLocale: phrases },
  )
);
