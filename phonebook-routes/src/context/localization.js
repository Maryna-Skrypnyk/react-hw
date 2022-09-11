import React, { Component, createContext } from 'react';
import en from '../locales/en.json';
import ua from '../locales/ua.json';

const locales = { en, ua };

const { Provider, Consumer } = createContext({
  currentLocale: 'en',
  localizedContent: locales.en,
  locales: Object.keys(locales),
  changeLocale: () => null,
});

export default class LocalizationContext extends Component {
  static Consumer = Consumer;

  changeLocale = locale => {
    this.setState({
      currentLocale: locale,
      localizedContent: locales[locale],
    });
  };

  state = {
    currentLocale: 'en',
    localizedContent: locales.en,
    locales: Object.keys(locales),
    changeLocale: this.changeLocale,
  };

  componentDidMount() {
    const parsedCurrentLocale = JSON.parse(
      localStorage.getItem('currentLocale'),
    );
    const parsedLocalizedContent = JSON.parse(
      localStorage.getItem('localizedContent'),
    );

    if (parsedCurrentLocale && parsedLocalizedContent) {
      this.setState({
        currentLocale: parsedCurrentLocale,
        localizedContent: parsedLocalizedContent,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextCurrentLocale = this.state.currentLocale;
    const prevCurrentLocale = prevState.currentLocale;
    const nextLocalizedContent = this.state.localizedContent;
    const prevLocalizedContent = prevState.localizedContent;

    if (
      nextCurrentLocale !== prevCurrentLocale &&
      nextLocalizedContent !== prevLocalizedContent
    ) {
      localStorage.setItem('currentLocale', JSON.stringify(nextCurrentLocale));
      localStorage.setItem(
        'localizedContent',
        JSON.stringify(nextLocalizedContent),
      );
    }
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
