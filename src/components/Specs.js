import React, { Component } from 'react';

import Headline from './Headline';
import List from './List';
import ListItem from './ListItem';

class Specs extends Component {
    render() {
        const specs = this.props.specs ?
        this.props.specs : job.specs;

        const listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';

        const { 
            workload,
            workweek,
            schedule,
            remote,
            pto
         } = specs;

         return (
            <div className="pa3 pa5-ns"
            style={{height: '100vh'}}
            >
                <Headline
                style="f2 tc"
                headline="Specs"
                />
                <List>
                    <ListItem
                    style={listStyle}
                    name="Workload"
                    value={workload}
                    />
                    <ListItem
                    style={listStyle}
                    name="Work Week"
                    value={`${workweek} Hours`}
                    />
                    <ListItem
                    style={listStyle}
                    name="Schedule"
                    value={schedule}
                    />
                    <ListItem
                    style={listStyle}
                    name="Remote"
                    value={remote}
                    />
                    <ListItem
                    style={listStyle}
                    name="PTO"
                    value={pto}
                    />
                </List>
            </div>
         );
    }
}

export default Specs;