import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Essentials from './Essentials';
import Methodology from './Methodology';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Essentials} />
      <Route path='/methodology' component={Methodology} />
    </Switch>
  </main>
);

export default Main;
