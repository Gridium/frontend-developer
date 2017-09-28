import React, { Component } from 'react';

import Headline from './Headline';
import List from './List';
import ListItem from './ListItem';

class Technology extends Component {
    testingFrameworks(testing) {
        let testFw = () => {
            return (
                <ul>
                    <li>
                    Good with at least one of:
                        <ul>
                            <li> 
                                JUnit: {testing.junit}
                            </li>
                            <li>
                                Mocha: {testing.mocha}
                            </li>
                            <li> 
                                Jasmine: {testing.jasmine}
                            </li>
                            <li> 
                                Selenium: {testing.selenium}
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        };

        return testFw();
    }

    frameworks(framework) {
        let frameworks = () => {
            return (
                <ul>
                    <li>
                        Familiar with at least one of:
                        <ul>
                            <li> 
                                React: {framework.react}
                            </li>
                            <li>
                                Vue: {framework.vue}
                            </li>
                            <li> 
                                Angular: {framework.angular}
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        };

        return frameworks();
    }

    render() {
        const technologies = this.props.technologies ?
        this.props.technologies : job.technologies;

        let { 
            css3,
            html5,
            javascript,
            node,
            rest,
            uiux,
            design,
            testing,
            framework,
            boardgames
         } = technologies;

         testing = testing.oneof;
         framework = framework.oneof;

         const listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';         

        return (
            <div className="pa3 pa5-ns">
                <Headline
                style="f2 tc"
                headline="Technologies"
                />
                <Headline
                style="f3 tc"
                headline="Must be competent/familiar with:"
                />
                <List>
                    <ListItem
                    style={listStyle}
                    name="CSS3"
                    value={css3}
                    />
                    <ListItem
                    style={listStyle}
                    name="HTML5"
                    value={html5}
                    />
                    <ListItem
                    style={listStyle}
                    name="JavaScript"
                    value={javascript}
                    />
                    <ListItem
                    style={listStyle}
                    name="Node.js"
                    value={node}
                    />
                    <ListItem
                    style={listStyle}
                    name="REST"
                    value={rest}
                    />
                    <ListItem
                    style={listStyle}
                    name="UI / UX"
                    value={uiux}
                    />
                    <ListItem
                    style={listStyle}
                    name="Design"
                    value={design}
                    />
                    <ListItem
                    style={listStyle}
                    name="Testing Frameworks"
                    value=""
                    >
                        {this.testingFrameworks(testing)}
                    </ListItem>
                    <ListItem
                    style={listStyle}
                    name="Frameworks"
                    value=""
                    >
                        {this.frameworks(framework)}
                    </ListItem>
                    <ListItem
                    style={listStyle}
                    name="Board Games"
                    value={boardgames}
                    />
                </List>
            </div>
        );
    }
}

export default Technology;