import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import '../node_modules/normalize.css/normalize.css'
import { Provider } from "react-redux";
import Store  from "./redux/store"

ReactDOM.render(
<BrowserRouter>
<Provider store={Store}>
    <App />
  </Provider>
</BrowserRouter>,
  document.getElementById("root")
);