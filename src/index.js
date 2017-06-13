import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './reducers/reducer-app'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Root from './react-components/App'


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

//const store = createStore(allReducers);
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

