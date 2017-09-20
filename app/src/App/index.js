// @flow

import React, { Component } from 'react';
import { Job } from '../data';

import {
  AppWrapper,
  Feature,
  Header,
  Section,
  Text,
  Title
} from './components';


class App extends Component {
  newDetails /* : array */ = [];

  getData = (clear: bool, v, k = undefined) => {
    if (!!clear) {
      this.newDetails = [];
    }

    if (typeof v !== 'object') {
      return this.newDetails = [
        ...this.newDetails,
        <Text key={`${v}-${k}-${new Date()}`}>{`${k}: ${v}`}</Text>
      ];
    }

    for (var kp in v) {
      if (Object.hasOwnProperty.call(v, kp)) {
        this.getData(false, v[kp], k !== undefined ? k + '.' + kp : kp);
      }
    }
  }

  getSections = () => {
    const newJob = {...Job};
    const sections = [];
    let newSection = null;

    delete newJob.headline;

    Object.entries(newJob).forEach(([key, value]) => {
      this.getData(true, newJob[key]);

      newSection = (
        <Section key={key}>
          <Title>{key}</Title>
          {this.newDetails}
        </Section>
      );

      sections.push(newSection)
    });

    return sections;
  }

  render() {
    const sections = this.getSections();

    return (
      <AppWrapper>
        <Header>
          <h2>{ Job.headline }</h2>
        </Header>

        <Feature>
          {sections}
        </Feature>
      </AppWrapper>
    );
  }
}

export default App;
