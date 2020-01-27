import React from 'react';
import {createStore, Store} from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";

import './App.scss';

const store: Store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">

      </div>
    </Provider>
  );
};

export default App;
