import React, { Component } from 'react';

export default class Headline extends Component {
    render() {
        const { style, headline } = this.props;

        return (
            <div className={style}>
                <h1>{headline}</h1>    
            </div>
        );
    }
}