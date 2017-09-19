import ReactDOM from 'react-dom';
import createRoutes from './config/routes';
import React from 'react';
//import {Router, Route, IndexRoute, BrowserHistory} from 'react-router';


const routes = createRoutes();

ReactDOM.render(
  routes,
  document.getElementById('app')
);




// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './views/App/index.js';
// // ReactDOM.render(<App />, document.getElementById('app'));
// import {Router, Route, IndexRoute} from 'react-router';
// import routes from './config/routes';


// ReactDOM.render(
//   <ReactRouter.Router history={ReactRouter.hashHistory}>
//     <ReactRouter.Route path="/" component={App}>
 
//     </ReactRouter.Route>
//   </ReactRouter.Router>,
//   destination
// );

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home}/>
//     </Route>
//   </Router>,
//   destination
// );