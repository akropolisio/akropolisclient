import * as React from 'react';
import { connect } from 'react-redux';
import * as Polyglot from 'node-polyglot';

import { IAppReduxState } from 'shared/types/app';
import { withProps } from 'shared/helpers/react';

import { ITranslateFunction, Lang } from '../../namespace';
import * as selectors from '../../redux/selectors';
import { DEFAULT_LANGUAGE, TContext } from '../../constants';
import { phrasesByLocale as phrases } from '../../locales';

interface IOwnProps {
  phrasesByLocale: typeof phrases;
}

interface IStateProps {
  locale: Lang;
}

type IProps = IStateProps & IOwnProps;

class I18nProvider extends React.PureComponent<IProps> {
  public polyglot: Polyglot = new Polyglot({
    locale: DEFAULT_LANGUAGE,
    phrases: this.props.phrasesByLocale[DEFAULT_LANGUAGE],
  });

  public state = { translator: this.polyglot.t.bind(this.polyglot) as ITranslateFunction };

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
