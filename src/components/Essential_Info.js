import React, { Component } from 'react';
import startCase from 'lodash.startcase';

import job from '../gridium/';

const formatDate = (date) => {
    return `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
};

export default class EssentialInfo extends Component {
    render() {
        const essentialInfo = this.props.essentialInfo ? 
            this.props.essentialInfo : job.essentials;

        const { locations, 
            employment, 
            experience, 
            startdate,
            companysize,
            teamsize 
        } = essentialInfo;

        return (
            <div>
                <ul>
                    <li>
                        Location: {startCase(locations)}
                    </li>
                    <li>
                        Employment Type: {employment}
                    </li>
                    <li>
                        Experience:
                        <ul>
                            {experience.map(expLevel => { return (
                                <li key={expLevel}>
                                    {expLevel}
                                </li>
                            ); })}
                        </ul>
                    </li>
                    <li>
                        Start Date: {formatDate(new Date(startdate))}
                    </li>
                    <li>
                        Team Size:
                        <ul>
                            <li>
                                Min: {teamsize.min}
                            </li>
                            <li>
                                Max: {teamsize.max}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}