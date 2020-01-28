import React from 'react';
import {applyMiddleware, createStore, Store} from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import SignUp from './components/SignUp/SignUp'

import './App.scss';

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <SignUp/>
      </div>
    </Provider>
  );
};

export default App;
