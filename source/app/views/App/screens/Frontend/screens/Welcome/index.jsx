import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
      <div className="container page">
        <h4>
          Welcome.
        </h4>
        <div className="row">
    	  	<div className="col-md-12">
            <div className="col-md-6">
    	  		 <p>This is home.</p>
            </div>
            <div className="col-md-6">
              <div className="button-group">
                <button href="javascript:;" className="btn btn-hg btn-primary" onClick={() => this.props.parentContext.generateNewApplicant()} >Generate New</button>
              </div>
            </div>
    	  	</div>
        </div>
      </div>
  	);
  }
}