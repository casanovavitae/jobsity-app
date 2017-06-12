import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import allReducers from './reducers/App'
import { createStore } from 'redux';
import App from './react-components/App';

const store = createStore(allReducers);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
