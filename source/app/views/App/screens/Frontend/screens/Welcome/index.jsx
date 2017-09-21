import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Grid, Row, ButtonToolbar, Button } from 'react-bootstrap';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.generate= this.generate.bind(this);
    this.state = {
        active: false,
        initial: true
    };
  }

  generate() {
      const currentState = this.state.active;
      if(currentState){
        this.setState({ 
          active: false, 
        });
      }

      this.setState({ 
        active: true, 
        initial: false 
      });

      this.props.parentContext.generateNewApplicant();
      //this.setState({ active: !currentState });
  };

  render(){
  	return (
      <Grid className="page">
        <Row>
          <Col xs={12}>
            <h4 className="animated bounceInDown">One</h4>
            <Col xs={12} md={6}>
             <p>This is home.</p>
            </Col>
            <Col xs={12} md={6}>
              <ButtonToolbar>
                <Button bsStyle="primary" className={ `btn-hg btn-center animated ${this.state.active ? "bounce": ""} ${this.state.initial ? "fadeInRight": ""} ` } href="javascript:;" onClick={this.generate} >Generate</Button>
              </ButtonToolbar>
            </Col>
          </Col>
        </Row>
      </Grid>
  	);
  }
}