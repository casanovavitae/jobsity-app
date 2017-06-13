import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import allReducers from './reducers/App'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './react-components/App';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

//const store = createStore(allReducers);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
