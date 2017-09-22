import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Grid, Row, ButtonToolbar, Button, Alert } from 'react-bootstrap';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.generate= this.generate.bind(this);
    this.generateDone = this.generateDone.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.state = {
        active: false,
        initial: true,
        generated: false
    };
    console.log("Welcome constructed!");
  }

  componentDidMount () {
     //This isn't standard - this is because of React-Bootstrap
     ReactDOM.findDOMNode(this.button).addEventListener('animationend', this.generateDone);
  }

  componentWillUnmount () {
     ReactDOM.findDOMNode(this.button).removeEventListener('animationend', this.generateDone);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("Next Props:");
  //   console.log(nextProps);
  //   console.log("Next State:");
  //   console.log(nextState);
  //   return this.state.active != nextState.active;
  // }

  generate() {
      this.props.parentContext.generateNewApplicant();
      this.setState({ 
        active: true, 
        generated: true,
        initial: false,
      });
  };

  generateDone() {
    this.setState({active: false})
  }

  handleAlertDismiss() {
    this.setState({generated: false});
  }

  render(){
    const generated = this.state.generated;
    let alert = null;
    if(generated){
      alert =
      <Alert bsStyle="info" className="animated bounceIn" onDismiss={this.handleAlertDismiss}>
        <p>Generated a new applicant and position!</p>
      </Alert>;
    }
  	return (
      <Grid className="page">
        <Row>
          <Col xs={12}>
            {alert}
            <h4 className="animated bounceInDown">Welcome</h4>
            <Col xs={12} md={6}>
             <p>This is a demonstration of a simple React application using React-Router, React-Bootstrap, and React-Vis.</p>
             <p>This application uses an object given by Gridium to generate a random job applicant based on that data as well as a 'semi-random' position at Gridium.</p>
            </Col>
            <Col xs={12} md={6}>
              <ButtonToolbar className="toolbar-center">
                <Button ref={(button) => { this.button = button; }}  bsStyle="primary" className={ `btn-hg btn-center animated ${this.state.active ? "bounce": ""} ${this.state.initial ? "fadeInRight": ""} ` } href="javascript:;" onClick={this.generate} >Generate</Button>
              </ButtonToolbar>
            </Col>
          </Col>
        </Row>
      </Grid>
  	);
  }
}