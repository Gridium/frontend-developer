import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Essentials from './Essentials';
import Methodology from './Methodology';
import Specs from './Specs';
import Profile from './Profile';
import Equipment from './Equipment';
import Technologies from './Technologies';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Essentials} />
      <Route path='/methodology' component={Methodology} />
      <Route path='/specs' component={Specs} />
      <Route path='/profile' component={Profile} />
      <Route path='/equipment' component={Equipment} />
      <Route path='/technologies' component={Technologies} />
    </Switch>
  </main>
);

export default Main;
