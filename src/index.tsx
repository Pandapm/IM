import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import App from './App/App';

import registerServiceWorker from './registerServiceWorker';
import './common/style.less';

type IRoute = {
  link: string,
  exact?: boolean,
  icon?: string,
  component?: any,
  subRoutes?: Array<IRoute>
};

const appPage: Array<IRoute> = [
  {
      link: '/',
      component: App
  }
];
ReactDOM.render(
  <Router>
    {
      appPage.map((item, index) => (
        <Route
          path={item.link}
          component={item.component}
        />
      ))
    }
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
