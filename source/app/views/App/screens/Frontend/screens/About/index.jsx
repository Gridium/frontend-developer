import React from 'react';
import ReactDOM from 'react-dom';

import { Col, Grid, Row, Table } from 'react-bootstrap';
import { RadarChart } from 'react-vis';

import "babel-polyfill"; //Mobile Safari support for Object.entries();

export default class About extends React.Component {

  constructor(props) {
    super(props);
    console.log(this);
    // this.basicFormat = format('.2r');
    // this.wideFormat = format('.3r');
    this.applicantData = [
      {name: 'Skills', css3: 0, design: 0, html5: 0, javascript: 0, node: 0, rest: 0, uiux: 0}
    ];
    Object.entries(this.props.parentContext.state.developer.applicant.technologies).map(([key,value])=>{
        if(key == 'css3'){
          this.applicantData[0].css3 = this.levelToNumber(value.toString());
        }else if(key == 'design'){
          this.applicantData[0].design = this.levelToNumber(value.toString());
        }else if(key == 'html5'){
          this.applicantData[0].html5 = this.levelToNumber(value.toString());
        }else if(key == 'javascript'){
          this.applicantData[0].javascript = this.levelToNumber(value.toString());
        }else if(key == 'node'){
          this.applicantData[0].node = this.levelToNumber(value.toString());
        }else if(key == 'rest'){
          this.applicantData[0].rest = this.levelToNumber(value.toString());
        }else if(key == 'uiux'){
          this.applicantData[0].uiux = this.levelToNumber(value.toString());
        }
      });
      console.log("About constructed!");
  }
 
  //  shouldComponentUpdate(nextProps, nextState){
  //   console.log("Next Props:" + nextProps);
  //   console.log("Next State:" + nextState);
  // }

  levelToNumber(level){
    let numVal = 0;
    if(level == 'Familiar'){
      numVal = 3;
    }else if(level == 'Good'){
      numVal = 5;
    }else if(level == 'Expert'){
      numVal = 7;
    }
    return numVal;
  }

  render(){
  	return (
      <Grid className="page">
        <Row>
          <Col xs={12}>
            <h4 className="animated bounceInDown">Applicant</h4>
            <Col xs={12} md={6}>
             <Table striped bordered condensed hover className="animated fadeInLeft">
              <thead>
                <tr>
                  <td colSpan="2">
                    {this.props.parentContext.state.developer.applicant.name}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Boardgame Experience:</td>
                  <td>{this.props.parentContext.state.developer.applicant.boardgames}</td>
                </tr>
                <tr>
                  <td>Operating System:</td>
                  <td>{this.props.parentContext.state.developer.applicant.equipment.operatingsystem}</td>
                </tr>
                <tr>
                  <td>Computer:</td>
                  <td>{this.props.parentContext.state.developer.applicant.equipment.computer}</td>
                </tr>
                <tr>
                  <td>Testing Framework:</td>
                  <td>{
                    Object.entries(this.props.parentContext.state.developer.applicant.testing).map(([key,value])=>{
                    return (
                      <span key={key}>{value.toString()} with {key}</span>
                    )})
                  }
                  </td>
                </tr>
                <tr>
                  <td>Preferred Framework:</td>
                  <td>{
                    Object.entries(this.props.parentContext.state.developer.applicant.framework).map(([key,value])=>{
                    return (
                      <span key={key}>{value.toString()} with {key}</span>
                    )})
                  }
                  </td>
                </tr>
              </tbody>
             </Table> 
            </Col>
            <Col xs={12} md={6}>
             <RadarChart className="animated fadeInRight"
                data={this.applicantData}
                startingAngle={0}
                domains={[
                  {name: 'css3', domain: [0, 8]},
                  {name: 'design', domain: [0, 8]},
                  {name: 'html5', domain: [0, 8]},
                  {name: 'javascript', domain: [0, 8]},
                  {name: 'node', domain: [0, 8]},
                  {name: 'rest', domain: [0, 8]},
                  {name: 'uiux', domain: [0, 8]}
                ]}
                width={300}
                height={200} 
                margin={{left: 40, right: 40, top: 20, bottom: 40}}
                />
            </Col>
          </Col>
        </Row>
      </Grid>
  	);
  }
}