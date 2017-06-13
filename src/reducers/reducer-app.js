import {combineReducers} from 'redux';
import counter from './reducer-counter'
import api from './reducer-api';
import auth from './reducer-auth'

const allReducers = combineReducers({
    credential: null,
    counter: counter,
    response: api,
    auth: auth
})

export default  allReducers;