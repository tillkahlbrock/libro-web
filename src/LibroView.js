import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducer';
import Layout from './components/Layout';

export default class LibroView {
    constructor() {

        const middleware = [thunk];
        if (DEBUG) {
            middleware.push(createLogger({
                level: 'info',
            }));
        }
        this.store = Redux.applyMiddleware(...middleware)(Redux.createStore)(reducer);
    }

    render(element) {
        ReactDom.render(
            this.reactComponent(),
            element
        );
    }

    reactComponent() {
        return (<Provider store={this.store}>
        {React.createElement(Layout())}
    </Provider>);
    }
}