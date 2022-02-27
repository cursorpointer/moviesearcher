import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {Question} from "./components/Main/Main.styles";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Question/>} persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
