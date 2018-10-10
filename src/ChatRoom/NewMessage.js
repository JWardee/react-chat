import React, { Component } from 'react';
import { connect } from "react-redux";

/**
 * Handles the creation of new chat messages.
 * When 'Send' is pressed a reducer action is dispatched,
 * the component has no idea about sockets or what the store
 * actually does with the data.
 */
class NewMessage extends Component {
    constructor(props) {
        super(props);
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            newMessage: ''
        };
    }

    handleSendMessage() {
        /** Submit new message to reducer - see 'connect' below */
        this.props.sendMessage(this.state.newMessage);

        /** Reset state to default to clear text field */
        this.setState({
            newMessage: ''
        });
    }

    handleChange(event) {
        this.setState({
            newMessage: event.target.value
        });
    }

    render() {
        return (
            <div className="newMessage">
                <input type="text" className="newMessage" value={this.state.newMessage} onChange={this.handleChange} />
                <button onClick={this.handleSendMessage}>Send</button>
            </div>
        );
    }
}

export default connect(null, (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch({
                type: 'BROADCAST_MESSAGE',
                payload: {text}
            });
        }
    }
})(NewMessage);