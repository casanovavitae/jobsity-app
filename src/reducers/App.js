import {combineReducers} from 'redux';
import counter from './counter/reducer-counter'

const allReducers = combineReducers({
    credential: null,
    counter: counter
})

export default  allReducers;