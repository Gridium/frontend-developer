import React from 'react';
import ReactDOM from 'react-dom';

import { Col, Grid, Row } from 'react-bootstrap';

export default class Position extends React.Component {

  constructor(props) {
    super(props);
    console.log(this);
    //Developer should be this.parentContext.developer
  }

  render(){
  	return (
      <Grid className="page">
        <Row>
          <Col xs={12}>
            <h4 className="animated bounceInDown">Position</h4>
            <Col xs={12} md={6}>

            </Col>
            <Col xs={12} md={6}>

            </Col>
          </Col>
        </Row>
      </Grid>
  	);
  }
}