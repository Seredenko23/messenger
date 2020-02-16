import React from 'react';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import Navigation from "./components/Navigation/Navigation";
import { websocketMiddleware } from "./redux/middleware/websocket";
import './App.scss';
import './style/variables.scss'
import Thread from "./components/Thread/Thread";

const store = createStore(rootReducer, applyMiddleware(thunk, websocketMiddleware));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/*<Navigation/>*/}
        <Thread/>
      </div>
    </Provider>
  );
};

export default App;
