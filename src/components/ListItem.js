import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        const { 
            style,
            name,
            value,
            children
         } = this.props;
        return (
            <li className={style}>
                {name}: {value}
                {children}
            </li>
        );
    }
};

export default ListItem;