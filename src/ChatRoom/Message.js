import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="Message" style={{marginBottom: 25 + 'px'}}>
                <strong style={{marginRight: 5 + 'px'}}>{ this.props.author }</strong>
                <span>{ this.props.message }</span>
            </div>
        );
    }
}

export default Message;