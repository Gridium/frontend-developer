import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class App extends React.Component{
	render(){
		return(
	      <div>
	        <ul>
	          <li><Link to="/" activeClassName="active">Welcome</Link></li>
	          <li><Link to="/about" activeClassName="active">About</Link></li>
	        </ul>
	        <div className="content">
	          {this.props.children}
	        </div>
	      </div>
		);
	}
}


//import Developer from 'assets/Developer';
// //import config from 'config';
// export default class App extends React.Component {
//   render() {
//   	console.log(Developer);
//   	console.log(config);
//     return (
//      <div style={{textAlign: 'center'}}>
//         <h1>Hello World</h1>
//       </div>);
//   }
// }
// // var App = React.createClass({
// //   render: function() {
// //     return (
// //       <div>
// //         <h1>Simple SPA</h1>
// //         <ul className="header">
// //           <li>Home</li>
// //           <li>Stuff</li>
// //           <li>Contact</li>
// //         </ul>
// //         <div className="content">
 
// //         </div>
// //       </div>
// //     )
// //   }
// // });