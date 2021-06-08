import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Chat from 'pages/Chat';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Chat} />
      </Switch>
    </Router>
  );
};

export default Routes;
