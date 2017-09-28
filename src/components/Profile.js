import React, { Component } from 'react';

import Headline from './Headline';
import List from './List';
import ListItem from './ListItem';

class Profile extends Component {
    render() {
        const profile = this.props.profile ?
        this.props.profile : job.profile;

        const { 
            newfeatures,
            clientsupport,
            documentation,
            maintenance,
            meetings
         } = profile;

         const listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';         

        return (
            <div className="pa3 pa5-ns"
            style={{height: '100vh'}}
            >
                <Headline
                style="f2 tc"
                headline="Work Profile"
                />
                <List>
                    <ListItem
                    style={listStyle}
                    name="New Features"
                    value={`${newfeatures}%`}
                    />
                    <ListItem
                    style={listStyle}
                    name="Client Support"
                    value={`${clientsupport}%`}
                    />
                    <ListItem
                    style={listStyle}
                    name="Documentation"
                    value={`${documentation}%`}
                    />
                    <ListItem
                    style={listStyle}
                    name="Maintenance"
                    value={`${maintenance}%`}
                    />
                    <ListItem
                    style={listStyle}
                    name="Meetings"
                    value={`${meetings}%`}
                    />
                </List>
            </div>
        );
    }
}

export default Profile;