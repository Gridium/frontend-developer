import React from 'react';
import ReactDOM from 'react-dom';
import history from 'appHistory';
import createRoutes from 'routes';
import createLinks from 'links';
let routes = null; //Can't be const because we are actively passing the updated state
const links = createLinks();
import { BrowserRouter as Router,HashRouter as HashRouter, NavLink} from 'react-router-dom';
//If testing via localhost, use HashRouter. If deploying/testing with a live server, use BrowserRouter and set history object

import generateDeveloper from 'shared/components/generateDeveloper';

export default class App extends React.Component{
	constructor(props) {
		super(props);
		let developer = new generateDeveloper();
		this.state = {
		  developer: developer
		};
		routes = createRoutes(this);
		console.log(this.state); //Debugging
	}

	generateNewApplicant() {
		let developer = new generateDeveloper();
		this.setState({
			developer: developer
		});
		console.log(this.state); //Debugging
	}

	render(){
		return(
//<Router history={history}/>
		<HashRouter>
	      <div>
	      	<div className="menu">
	      		{links}
	        </div>
	        <div className="content">
	        	{routes}
	        </div>
	      </div>
	     </HashRouter>
//</Router>
		);
	}
}