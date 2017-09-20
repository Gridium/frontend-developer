// @flow

import React, { Component } from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
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
  state = {
    animated: []
  };

  newDetails /* : array */ = [];
  isMobile /* : boolean */ = Boolean(window.innerWidth <= 600);

  componentDidMount() {
    this.setState(
        {
          animated: [...Array(7)].map(() => new Animated.Value(0.2))
        },
        () => {
          Animated.stagger(
            100,
            this.state.animated.map(anim =>
              Animated.spring(anim, { toValue: 1 })
            )
          ).start();
        }
      );
  }

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
    const { animated } = this.state;
    const newJob = {...Job};
    const sections = [];
    let newSection = null;

    delete newJob.headline;

    Object.entries(newJob).forEach(([key, value], eq) => {
      const yVal = !!animated.length
          ? animated[eq].interpolate({
              inputRange: [0, 1],
              outputRange: ['25px', '0px']
            })
          : 0;

      this.getData(true, newJob[key]);

      newSection = (
        <Animated.div
          key={key}
          style={{
              marginBottom: '1rem',
              marginRight: this.isMobile ? 0 : '1rem',
              minWidth: '21.875rem',
              opacity: Animated.template`${animated[eq]}`,
              transform: Animated.template`translate3d(0, ${yVal}, 0)`,
              width: this.isMobile ? '100%' : 'calc(33.333% - 2rem)'
            }}
        >
          <Section>
            <Title>{key}</Title>
            {this.newDetails}
          </Section>
        </Animated.div>
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
