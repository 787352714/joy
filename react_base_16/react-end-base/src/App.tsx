import React, { FC } from 'react';
import { HashRouter,Switch } from 'react-router-dom';
import { routerAuthConfig } from './routerConfig/auth';
import { FrontendAuth } from './router/frontend-auth'
import './App.css';

const App: FC = () => (
  <HashRouter>
    <Switch>
      <FrontendAuth config={routerAuthConfig} />
    </Switch>
  </HashRouter>
);

export default App;