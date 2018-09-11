import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default; // eslint-disable-line global-require
      ReactDOM.render(
        <App>
          <NextApp />
        </App>,
        document.getElementById('root')
      );
  });
}

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>, 
  document.getElementById('root'));
registerServiceWorker();
