import React from 'react';
import ReactDOM from 'react-dom';
import Root from './react-components/Root'
import allReducers from './reducers/reducer-app'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

//const store = createStore(allReducers);
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

