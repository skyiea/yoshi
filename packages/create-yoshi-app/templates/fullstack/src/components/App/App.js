import React from 'react';
import { translate } from 'react-i18next';
import s from './App.scss';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    t: PropTypes.func,
  };

  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        <h2>{t('title')}</h2>
        <p
          className={s.intro}
          dangerouslySetInnerHTML={{ __html: t('intro') }}
        />
        <p dangerouslySetInnerHTML={{ __html: t('reference') }} />
      </div>
    );
  }
}

export default translate()(App);
