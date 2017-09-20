import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
	  	<div className="col-md-12">
	  		<p>This is home.</p>
        <span>{this.props.parentContext.state.developer.randomVariable}</span>
        <div className="button-group">
          <button href="javascript:;" className="btn btn-default" onClick={() => this.props.parentContext.generateNewApplicant()} >Generate New</button>
        </div>
	  	</div>
  	);
  }
}