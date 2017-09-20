import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from 'screens/Welcome';
import About from 'screens/About';
import Position from 'screens/Position';

const createRoutes = (parentProps) => (
    <Switch>
		<Route path="/" exact render={(props) => (<Welcome parentContext={parentProps} {...props}/>)} />
		<Route path="/about" exact render={(props) => (<About parentContext={parentProps} {...props}/>)} />
		<Route path="/position" exact render={(props) => (<Position parentContext={parentProps} {...props}/>)} />
		<Route render={(props) => (<Welcome parentContext={parentProps} {...props}/>)} />
    </Switch>
);

export default createRoutes;