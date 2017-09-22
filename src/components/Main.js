import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Essentials from './Essentials';
import Methodology from './Methodology';
import Specs from './Specs';
import Profile from './Profile';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Essentials} />
      <Route path='/methodology' component={Methodology} />
      <Route path='/specs' component={Specs} />
      <Route path='/profile' component={Profile} />
    </Switch>
  </main>
);

export default Main;
