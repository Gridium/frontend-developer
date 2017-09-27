import React, { Component } from 'react';

import List from './List';
import ListItem from './ListItem';

import job from '../gridium';

export default class Methodology extends Component {
    isMethodUsed(isUsed) {
        if (isUsed === true) {
            return (
                <i className="glyphicon glyphicon-ok" />
            );
        }
        else {
            return (
                <i className="glyphicon glyphicon-remove" />
            );
        }
    }

    render() {
        const methods = this.props.methodology ?
            this.props.methodology : job.methodology;

            const listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';
            
        const { codereviews,
            prototyping,
            failfast,
            unittests,
            integrationtests,
            buildserver,
            staticcodeanalysis,
            versioncontrol,
            issuetracker,
            standups,
            quickstart,
            commitondayone
        } = methods;

        return (
            <div className="pa3 pa5-ns">
                <List>
                    <ListItem 
                    style={listStyle} 
                    name="Code Reviews" 
                    value={this.isMethodUsed(codereviews)} />
                    <li>
                        Prototyping: {this.isMethodUsed(prototyping)}
                    </li>
                    <li>
                        Fail Fast: {this.isMethodUsed(failfast)}
                    </li>
                    <li>
                        Unit Tests: {this.isMethodUsed(unittests)}
                    </li>
                    <li>
                        Integration Tests: {this.isMethodUsed(integrationtests)}
                    </li>
                    <li>
                        Fail Fast: {this.isMethodUsed(failfast)}
                    </li>
                    <li>
                        Build Server: {buildserver}
                    </li>
                    <li>
                        Static Code Analysis: {staticcodeanalysis}
                    </li>
                    <li>
                        Version Control: {versioncontrol}
                    </li>
                    <li>
                        Issue Tracker: {issuetracker}
                    </li>
                    <li>
                        Stand Ups: {this.isMethodUsed(standups)}
                    </li>
                    <li>
                        Quick Start: {this.isMethodUsed(quickstart)}
                    </li>
                    <li>
                        Commit On Day One: {this.isMethodUsed(commitondayone)}
                    </li>
                </List>
            </div>
        );
    }
}