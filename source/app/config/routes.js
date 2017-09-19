// import React from 'react';
// import {Router, Route, IndexRoute} from 'react-router';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import history from 'appHistory';

import App from '../index.js';
import Main from '../views/App';
import Welcome from '../views/App/screens/Frontend/screens/Welcome';
import About from '../views/App/screens/Frontend/screens/About';

const routes = (
    <Router>
        {}
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={about} />
            </Switch>
        </App>
    </Router>
);

// const createRoutes = () => (
//   <Router history={history}>
//     <App>
//         <Route exact={true} path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/courses" component={Courses} />
//         <Route path="/teachers" component={Teachers} />
//     </App>

//     <Route path="/" component={App}>
//       <IndexRoute component={Welcome}/>
//       <Route path="about" component={About} />
//     </Route>

//   </Router>
// );

export default createRoutes;






// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import {Router, Route, IndexRoute} from 'react-router';

// import App from '../views/App';
// import Welcome from '../views/App/screens/Frontend/screens/Welcome';
// import About from '../views/App/screens/Frontend/screens/Welcome';

// const routes=(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Welcome}/>
//       <Route path="about" component={About} />
//     </Route>
//   </Router>
// )

// export default routes;


// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Welcome}/>
//       <Route path="about" component={About} />
//     </Route>
//   </Router>,
//   destination
// );
// module.exports = ({ routes, route }) =>
//   routes(require,
//     route('app', '/', { dir: '' },
//       //Base screen
//       route('Frontend', '/',
//         // Views
//         route('Welcome'),
//         route('About')
//       )
//     )
//   );
// render(
//     <Router>
//         <Route path="/" component={Home}/>
//         <Route path="/cars" component={Car}/>
//         <Route path="/about" component={About}/>
//     </Router>,
// );
// render(
// <Router>
//     <Route path="/" component={Main} path="app">
//         <IndexRoute component={Frontend} />
//         <Route path="/about" component={About}/>
//     </Route>
// </Router>
// );