import React, { Component } from 'react';
import NewMessage from './NewMessage';
import Message from "./Message";
import {connect} from "react-redux";

class ChatRoom extends Component {
    render() {
        return (
            <div className="ChatRoom">
                {this.props.messages.map(function(message, i) {
                    return <Message author={message.author}
                                    message={message.text}
                                    key={i} />
                })}
                <NewMessage/>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        messages: state.messages
    }
})(ChatRoom);