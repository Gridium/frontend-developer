import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Essentials from './Essentials';
import Methodology from './Methodology';
import Specs from './Specs';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Essentials} />
      <Route path='/methodology' component={Methodology} />
      <Route path='/specs' component={Specs} />
    </Switch>
  </main>
);

export default Main;
