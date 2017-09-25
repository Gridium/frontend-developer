import React, { Component } from 'react';

import job from './gridium';

import Headline from './components/Headline';
import EssentialInfo from './components/Essential_Info';
import Methodology from './components/Methodology';

export default class App extends Component {
    render() {
        return (
        <div className="helvetica">
            <div className="bg-orange ba">
                <Headline headline={job.headline} />
                <EssentialInfo essentialInfo={job.essentials} />
            </div>
            <div className="bg-black orange">
                <Methodology methodology={job.methodology} />
            </div>
        </div>
        );
    };
}