import SocketManager from './SocketManager';
import ChatServerDetails from '../Constants';

let socketManager = new SocketManager(
    ChatServerDetails.address,
    ChatServerDetails.port
);

const initialState = {
    messages: []
};

export default (state = initialState, action) => {
    switch (action.type)
    {
        /**
         * This action is responsible for passing
         * on any new message to the sockets
         * through the socketManager class
         */
        case 'BROADCAST_MESSAGE' :
            socketManager.broadcastMessage(action.payload.text);
            return state;
        case 'ADD_MESSAGE' :
            let newMessages = state.messages.slice();

            newMessages.push({
                author: action.payload.author,
                text: action.payload.text,
            });

            return Object.assign({}, state, {
                messages: newMessages
            });
        default :
            return state;
    }
};