import {createStore} from 'redux';
import ChatRoomReducer from './ChatRoom/Reducer';

/**
 * We don't use combineReducers here as we only
 * have one reducer. However if multiple reducers were
 * needed we would combine them here into the store
 */
export default createStore(ChatRoomReducer);