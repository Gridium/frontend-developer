import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Essentials from './Essentials';
import Methodology from './Methodology';
import Specs from './Specs';
import Profile from './Profile';
import Equipment from './Equipment';
import Technologies from './Technologies';
import Other from './Other';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Essentials} />
      <Route path='/methodology' component={Methodology} />
      <Route path='/specs' component={Specs} />
      <Route path='/profile' component={Profile} />
      <Route path='/equipment' component={Equipment} />
      <Route path='/technologies' component={Technologies} />
      <Route path='/other' component={Other} />
    </Switch>
  </main>
);

export default Main;
