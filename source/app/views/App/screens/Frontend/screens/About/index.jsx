import React from 'react';
import ReactDOM from 'react-dom';

import { Col, Grid, Row } from 'react-bootstrap';

export default class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
      <Grid className="page">
        <Row>
          <Col xs={12}>
            <h4 className="animated bounceInDown">Applicant</h4>
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