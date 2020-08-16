import React, { FC } from 'react';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import { routerAuthConfig } from './routerConfig/auth';
import { FrontendAuth } from './router/frontend-auth'
import './App.scss';

const App: FC = () => (
  <Router>
    <Switch>
      <FrontendAuth config={routerAuthConfig} />
    </Switch>
  </Router>
);

export default App;