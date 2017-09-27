import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul className="mt0 list pl0 measure center"> 
                {this.props.children}
            </ul>
        );
    }
}

export default List;