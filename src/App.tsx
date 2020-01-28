import React from 'react';
import {applyMiddleware, createStore, Store} from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import Navigation from "./components/Navigation/Navigation";
import './App.scss';

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation/>
      </div>
    </Provider>
  );
};

export default App;
