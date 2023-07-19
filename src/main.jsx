import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import App from './App.jsx'
import postreducer from "./reducer/reducer"
const store=createStore(postreducer,applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)