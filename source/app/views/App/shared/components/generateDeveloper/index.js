import Developer from 'assets/Developer';

export default class generateDeveloper{
	   constructor() {
       		this.headline = Developer.headline;
       		this.randomVariable = Math.floor(Math.random() * 6) + 1; //Testing if new developer is generated
       //this.lastName = lastName;
   }
}

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