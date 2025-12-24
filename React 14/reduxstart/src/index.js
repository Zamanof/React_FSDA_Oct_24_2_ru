import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";

import {reducer} from "./reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

