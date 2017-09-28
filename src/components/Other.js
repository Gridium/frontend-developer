import React, { Component } from 'react';
import startCase from 'lodash.startcase';

import Headline from './Headline';

class Other extends Component {
    render() {
        const other = this.props.other ?
        this.props.other : job.other;

        const listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';        

        const otherItems = other.map(item => {
                return (
                    <li 
                    key={item}
                    className={listStyle}
                    >
                        {startCase(item)}
                    </li>
                );
            });

        return (
            <div className="pa3 pa5-ns"
            style={{height: '100vh'}}
            >
                <Headline
                style="f2 tc"
                headline="Equipment"
                />
                <ul 
                className="mt0 list pl0 measure center"
                > 
                    {otherItems}
                </ul>
            </div>
        );
    }
}

export default Other;