import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './store';
import ChatRoom from './ChatRoom/ChatRoom';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
              <ChatRoom/>
          </div>
        </Provider>
    );
  }
}

export default App;
