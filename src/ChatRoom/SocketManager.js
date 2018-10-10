import store from "../store";
import io from "socket.io-client";

export default class SocketManager {
    /**
     * Connect and save the socket to a property
     * within the class ready to be used later
     */
    constructor(address = 'localhost', port = 3001) {
        this.socket = new io(address + ':' + port);
        this.registerSocketEvents();
    }

    /**
     * On calling this method we register the events
     * that will trigger when we receive new data
     * from the socket. They all call dispatchAddMessage
     * because they all dispatch the same event
     */
    registerSocketEvents() {
        this.socket.on('user-connected', this.dispatchAddMessage);
        this.socket.on('user-disconnected', this.dispatchAddMessage);
        this.socket.on('receive-message', this.dispatchAddMessage);
    }

    dispatchAddMessage(payload) {
        store.dispatch({
            type: 'ADD_MESSAGE',
            payload
        });
    }

    /**
     * Using the socket created within the constructor,
     * send a new message to the server
     */
    broadcastMessage(text) {
        this.socket.emit('new-message', text);
    }
}