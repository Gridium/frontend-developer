import React, { Component } from 'react';
import startCase from 'lodash.startcase';

import Headline from './Headline';
import List from './List';
import ListItem from './ListItem';

import job from '../gridium/';

const formatDate = (date) => {
    return `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
};

export default class EssentialInfo extends Component {
    teamSize(teamsize) {
        return (
            <ul>
                <li>
                Min: {teamsize.min}
                </li>
                <li>
                Max: {teamsize.max}
                </li>
            </ul>
        );
    }

    experienceLevel(experience) {
        let explvl = experience.map((exp) => {
            return (
                <li key={exp}> 
                    {exp}
                </li>
            );
        });

        return (
            <ul>
                {explvl}
            </ul>
        ); 
    }

    render() {
        const essentialInfo = this.props.essentialInfo ? 
            this.props.essentialInfo : job.essentials;

        const listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';
            

        const { locations, 
            employment, 
            experience, 
            startdate,
            companysize,
            teamsize 
        } = essentialInfo;

        return (
            <div className="pa3 pa5-ns">
                <Headline
                style="f2 tc"
                headline="Essential Information"
                />            
                <List>
                    <ListItem
                    style={listStyle}
                    name="Location" 
                    value={startCase(locations)}
                    />
                    <ListItem
                    style={listStyle}
                    name="Employment Type" 
                    value={employment}
                    />
                    <ListItem
                    style={listStyle}
                    name="Experience"
                    value={() => ""}
                    >
                        {this.experienceLevel(experience)}
                    </ListItem>
                    <ListItem
                    style={listStyle}
                    name="Start Date" 
                    value={formatDate(new Date(startdate))}
                    />
                    <ListItem
                    style={listStyle}
                    name="Team Size"
                    value={() => ""}
                    >
                        {this.teamSize(teamsize)}
                    </ListItem>
                </List>
            </div>
        );
    }
}