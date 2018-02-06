import React, {Component} from 'react';

export class Button extends Component {
    render() {
        const {children} = this.props;

        return (
            <button className="btn" onClick={this.props.onClick}>{children}</button>
        );
    }
}