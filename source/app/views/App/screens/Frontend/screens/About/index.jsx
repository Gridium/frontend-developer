import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
      <div className="container page">
        <h4>
          About.
        </h4>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
             <p>This is about.</p>
            </div>
          </div>
        </div>
      </div>
  	);
  }
}