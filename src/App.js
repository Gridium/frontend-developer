import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import job from './gridium';

import Headline from './components/Headline';
import EssentialInfo from './components/Essential_Info';
import Methodology from './components/Methodology';

export default class App extends Component {
    render() {
        const match = this.props.match;
        return (
        <div className="helvetica">
            <div className="bg-orange ba">
                <Headline headline={job.headline} />
                <NavLink to="/home/essentials"
                    className="navy" 
                    activeClassName="underline">
                    Essential Info
                </NavLink>
                <NavLink to="/home/methodology"
                    className="navy" 
                    activeClassName="underline">
                    Methodology
                </NavLink>
            </div>
            <div className="bg-black orange">
                <Switch>
                    <Route exact path={`${match.url}`} component={EssentialInfo} />
                    <Route path={`${match.url}/essentials`} component={EssentialInfo} />
                    <Route path={`${match.url}/methodology`} component={Methodology} />
                </Switch>
            </div>
        </div>
        );
    };
}