import React, { Component } from 'react';

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
            <div>
                <ul>
                    <li>
                        Code Reviews: {this.isMethodUsed(codereviews)}
                    </li>
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
                </ul>
            </div>
        );
    }
}