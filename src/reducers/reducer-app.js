import {combineReducers} from 'redux';
import counter from './reducer-counter';
import {get_resume,get_tasks} from './reducer-api';
import auth from './reducer-auth';
import { routerReducer } from 'react-router-redux';





/*const allReducers = combineReducers({
    routing: routerReducer,
    credential: null,
    counter: counter,
    api: a(),
    apib: b(),
    auth: auth
})*/
const allReducers = combineReducers(
    {
        routing: routerReducer,
        credential: null,
        counter: counter,
        api: get_resume,
        task: get_tasks,
        auth: auth
    }
    )

export default  allReducers;

/*
 api_response:
 {
 api_get_resume: api.type == 'API_GET_RESUME'?api:'',
 api_get_text:   api.type == 'API_GET_TEXT'?api:''
 },*/
