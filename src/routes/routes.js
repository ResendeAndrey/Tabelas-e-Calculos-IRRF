import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages

import Home from '../pages/Home';
import Page404 from '../pages/Page404/'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
