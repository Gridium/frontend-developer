import React from 'react';
import Developer from 'assets/Developer';
import config from 'config';

export default class App extends React.Component {
  render() {
  	console.log(Developer);
  	console.log(config);
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}