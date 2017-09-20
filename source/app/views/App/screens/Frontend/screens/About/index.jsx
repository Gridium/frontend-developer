import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
	  	<div className="col-md-12">
	  		<p>This is about.</p>
	  	</div>
  	);
  }
}