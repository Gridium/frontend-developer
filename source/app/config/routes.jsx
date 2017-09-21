import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Welcome from 'screens/Welcome';
import About from 'screens/About';
import Position from 'screens/Position';

import history from 'appHistory';

const createRoutes = (parentProps) => (

    <Route render={({location}) => (
  	<ReactCSSTransitionReplace transitionName="fade-wait" 
                           transitionEnterTimeout={1000} transitionLeaveTimeout={400}>
        <div key={location.pathname}>
			<Switch location={location} >
					<Route path="/" exact render={(props) => (<Welcome parentContext={parentProps} {...props}/>)} />
					<Route path="/about" exact render={(props) => (<About parentContext={parentProps} {...props}/>)} />
					<Route path="/position" exact render={(props) => (<Position parentContext={parentProps} {...props}/>)} />
			    </Switch>
		</div>
    </ReactCSSTransitionReplace>
    )}/>
);

export default createRoutes;