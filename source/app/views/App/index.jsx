import React from 'react';
import ReactDOM from 'react-dom';
import history from 'appHistory';
import createRoutes from 'routes';
import createLinks from 'links';
import { Router,HashRouter as HashRouter, NavLink} from 'react-router-dom';
//If testing via localhost, use HashRouter. 
//If deploying/testing with a live server, use BrowserRouter and set history object
import generateDeveloper from 'shared/components/generateDeveloper';
const basePath = '/gridium';
let routes = null;
let links = createLinks(basePath);

export default class App extends React.Component{
	constructor(props) {
		super(props);
		let developer = new generateDeveloper();
		this.state = {
		  developer: developer
		};
		routes = createRoutes(this,basePath);
		console.log(this); //Debugging
		console.log("App constructed");
	}

	generateNewApplicant() {
		let developer = new generateDeveloper();
		this.setState({
			developer: developer
		});
		console.log(this.state); //Debugging
	}

	// render(){
	// 	return(
	// 	<HashRouter>
	//       <div>
	//       		{links}
	//         	{routes}
	//       </div>
	//      </HashRouter>
	// 	);
	// }

	render(){
		return(
			<Router history={history}>
				<div>
					{links}
					{routes}
				</div>
			</Router>
		);
	}

}