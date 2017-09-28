import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import job from './gridium';

import Headline from './components/Headline';
import Nav from './components/Nav';
import EssentialInfo from './components/Essential_Info';
import Methodology from './components/Methodology';
import Specs from './components/Specs';
import Profile from './components/Profile';
import Equipment from './components/Equipment';
import Technology from './components/Technology';
import Other from './components/Other';

import asyncComponent from './components/asyncComponent';

export default class App extends Component {
    render() {
        const match = this.props.match;
        return (
        <div className="helvetica w-100 h-100 m0">
            <div 
            className="bg-orange ba">
            <Headline 
                style="f1 tc"
                headline={job.headline} 
                />
                <Nav />
            </div>
            <div 
            className="bg-black orange"
            >
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
                    <Route 
                    path={`${match.url}/specs`} 
                    component={asyncComponent(() => import('./components/Specs'))} />
                    <Route 
                    path={`${match.url}/profile`} 
                    component={asyncComponent(() => import('./components/Profile'))} />
                    <Route 
                    path={`${match.url}/equipment`} 
                    component={asyncComponent(() => import('./components/Equipment'))} />
                    <Route 
                    path={`${match.url}/technology`} 
                    component={asyncComponent(() => import('./components/Technology'))} />
                    <Route 
                    path={`${match.url}/other`} 
                    component={asyncComponent(() => import('./components/Other'))} />
                </Switch>
            </div>
        </div>
        );
    };
}