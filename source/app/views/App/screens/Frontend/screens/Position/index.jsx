import React from 'react';
import ReactDOM from 'react-dom';

import { Col, Grid, Row } from 'react-bootstrap';

export default class Position extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
      <Grid className="page">
        <Row>
          <Col xs={12}>
            <h4 className="animated bounceInDown">Three</h4>
            <Col xs={12} md={6}>
             <p>This is three.</p>
            </Col>
          </Col>
        </Row>
      </Grid>
  	);
  }
}