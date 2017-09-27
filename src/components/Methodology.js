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
                    name="Code Reviews:" 
                    value={this.isMethodUsed(codereviews)} />
                    <ListItem
                    style={listStyle}
                    name="Prototyping:" 
                    value={this.isMethodUsed(prototyping)}
                    />
                    <ListItem
                    style={listStyle}
                    name=" Fail Fast:" 
                    value={this.isMethodUsed(failfast)}
                    />
                    <ListItem
                    style={listStyle}
                    name="Unit Tests:" 
                    value={this.isMethodUsed(unittests)}
                    />
                    <ListItem
                    style={listStyle}
                    name="Integration Tests:" 
                    value={this.isMethodUsed(integrationtests)}
                    />
                    <ListItem
                    style={listStyle}
                    name="Fail Fast:" 
                    value={this.isMethodUsed(failfast)}
                    />
                    <ListItem
                    style={listStyle}
                    name="Build Server:" 
                    value={buildserver}
                    />
                    <ListItem
                    style={listStyle}
                    name="Static Code Analysis:" 
                    value={staticcodeanalysis}
                    />
                    <ListItem
                    style={listStyle}
                    name="Version Control:" 
                    value={versioncontrol}
                    />
                    <ListItem
                    style={listStyle}
                    name="Issue Tracker:" 
                    value={issuetracker}
                    />
                    <ListItem
                    style={listStyle}
                    name="Stand Ups:" 
                    value={this.isMethodUsed(standups)}
                    />
                    <ListItem
                    style={listStyle}
                    name="Quick Start:" 
                    value={this.isMethodUsed(quickstart)}
                    />
                    <ListItem
                    style={listStyle}
                    name="Commit On Day One:" 
                    value={this.isMethodUsed(commitondayone)}
                    />
                </List>
            </div>
        );
    }
}