import React, { Component } from 'react';

export default class Headline extends Component {
    render() {
        return (
            <div className="f1">
                <h1>{this.props.headline}</h1>    
            </div>
        );
    }
}