import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Welcome from 'screens/Welcome';
import About from 'screens/About';
import Position from 'screens/Position';

import history from 'appHistory';

const createRoutes = (parentProps,basePath) => (
    <Route render={({location}) => (
  	<ReactCSSTransitionReplace transitionName="fade-wait" 
                           transitionEnterTimeout={1000} transitionLeaveTimeout={400}>
        <div key={location.pathname}>
			<Switch location={location} >
					<Route path={`${basePath}/`} exact render={(props) => (<Welcome parentContext={parentProps} {...props}/>)} />
					<Route path={`${basePath}/about`} exact render={(props) => (<About parentContext={parentProps} {...props}/>)} />
					<Route path={`${basePath}/position`} exact render={(props) => (<Position parentContext={parentProps} {...props}/>)} />
					<Route render={(props) => (<Welcome parentContext={parentProps} {...props}/>)} />
			    </Switch>
		</div>
    </ReactCSSTransitionReplace>
    )}/>
);

export default createRoutes;