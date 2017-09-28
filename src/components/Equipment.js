import React, { Component } from 'react';

import Headline from './Headline';
import List from './List';
import ListItem from './ListItem';

class Equipment extends Component {
    operatingSystems(operatingsystem) {
        let opsys = operatingsystem.map((os) => {
            return (
                <li key={os}> 
                    {os}
                </li>
            );
        });

        return (
            <ul>
                {opsys}
            </ul>
        ); 
    }

    render() {
        const equipment = this.props.equipment ?
        this.props.equipment : job.equipment;

        const { 
            operatingsystem,
            computer
         } = equipment;

         const listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';         

        return (
            <div className="pa3 pa5-ns"
            style={{height: '100vh'}}
            >
                <Headline
                style="f2 tc"
                headline="Equipment"
                />
                <List>
                    <ListItem
                    style={listStyle}
                    name="Operating System"
                    value={""}
                    >
                        {this.operatingSystems(operatingsystem)}
                    </ListItem>
                    <ListItem
                    style={listStyle}
                    name="Computer"
                    value={computer}
                    />
                </List>
            </div>
        );
    }
}

export default Equipment;