import React from 'react';
import ReactDOM from 'react-dom';

import { Col, Grid, Row, Table } from 'react-bootstrap';

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
              <h5>{this.props.parentContext.state.developer.position.headline}</h5>
              <p>We are looking for a { this.props.parentContext.state.developer.position.essentials.experience } {this.props.parentContext.state.developer.position.essentials.headline} to work at our office in {this.props.parentContext.state.developer.position.essentials.location}!</p> 
              <p>We are a team of {this.props.parentContext.state.developer.position.essentials.teamsize} and are looking for someone with a start date of {this.props.parentContext.state.developer.position.essentials.startdate[0]}. Inquire today! </p>
            </Col>
            <Col xs={12} md={6}>
             <Table striped bordered condensed hover className="animated fadeInLeft">
              <thead>
                <tr>
                  <td colSpan="2">
                    Specs
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PTO</td>
                  <td>{this.props.parentContext.state.developer.position.specs.pto}</td>
                </tr>
                <tr>
                  <td>Remote</td>
                  <td>{this.props.parentContext.state.developer.position.specs.remote}</td>
                </tr>
                <tr>
                  <td>Schedule</td>
                  <td>{this.props.parentContext.state.developer.position.specs.schedule}</td>
                </tr>
                <tr>
                  <td>Workload For</td>
                  <td>{this.props.parentContext.state.developer.position.specs.workload} person(s)</td>
                </tr>
                <tr>
                  <td>Average Workweek</td>
                  <td>{this.props.parentContext.state.developer.position.specs.workweek}</td>
                </tr>
              </tbody>
              </Table>
            </Col>
          </Col>
        </Row>
      </Grid>
  	);
  }
}