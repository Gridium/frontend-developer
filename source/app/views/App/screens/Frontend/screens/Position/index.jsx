import React from 'react';
import ReactDOM from 'react-dom';

export default class Position extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
      <div className="container page">
        <h4>
          Position.
        </h4>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
             <p>This is position.</p>
            </div>
          </div>
        </div>
      </div>
  	);
  }
}