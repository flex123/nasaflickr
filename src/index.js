import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from './customTheme';
import './index.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
