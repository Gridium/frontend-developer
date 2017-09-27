import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import job from './gridium';

import Headline from './components/Headline';
import Nav from './components/Nav';
import EssentialInfo from './components/Essential_Info';
import Methodology from './components/Methodology';
import asyncComponent from './components/AsyncComponent';

export default class App extends Component {
    render() {
        const match = this.props.match;
        return (
        <div className="helvetica">
            <div className="bg-orange ba">
                <Headline headline={job.headline} />
                <Nav />
            </div>
            <div className="bg-black orange">
                <Switch>
                    <Route 
                    exact path={`${match.url}`} 
                    component={EssentialInfo} />
                    <Route 
                    path={`${match.url}/essentials`} 
                    component={EssentialInfo} />
                    <Route 
                    path={`${match.url}/methodology`} 
                    component={asyncComponent(() => import('./components/Methodology'))} />
                </Switch>
            </div>
        </div>
        );
    };
}