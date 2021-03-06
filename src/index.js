import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App.js';
import {store, persistor} from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </BrowserRouter>
    , document.querySelector("#root"));






