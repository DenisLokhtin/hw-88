import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import App from './App';
import store from "./store/configureStore";
import history from "./history";

const app = (
    <Provider store={store}>
        <Router history={history}>
                <App/>
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));