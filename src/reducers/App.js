import {combineReducers} from 'redux';
import counter from './counter/reducer-counter'
import api from './reducer-api'

const allReducers = combineReducers({
    credential: null,
    counter: counter,
    response: api
})

export default  allReducers;