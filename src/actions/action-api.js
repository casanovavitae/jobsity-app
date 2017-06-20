import axios from 'axios';
import _ from 'lodash';

export const retrieveData = (action,url) => {
    return function(dispatch) {
        axios.get(url)
            .then(response => {
                dispatch({
                    type: action,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const putData = (action,url,text,check,multipletasks,id) => {
    return function(dispatch) {
        axios.put(url, {
            data: {
                text: text,
                completed: check
            }
        })
            .then(response => {
                let tasks = multipletasks.data;

                let taskslist = _.map(tasks, (item)=> {
                    if(item._id.$oid === id){
                        item.data.completed = check;
                    }
                    return item;
                });

                dispatch({
                    type: action,
                    payload: taskslist
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const addTask = (action,url,text,multipletasks) => {
    return function(dispatch) {
        axios.post(url, {
            data: {
                text: text,
                completed: false
            }
        })
            .then(response => {
                let singletask = response.data;
                let tasks = multipletasks.data;
                tasks.push(singletask);
                dispatch({
                    type: action,
                    payload: tasks
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const deleteTask = (action,url,key,multipletasks) => {
    return function(dispatch) {
        let tasks = multipletasks.data;
        let i = tasks.length;

        while(i--){
            if(tasks[i].data.completed === true){
                let id = tasks[i]._id.$oid;
                tasks.splice(i, 1);
                axios.delete(url+id+key)
                    .then(response => {
                        dispatch({
                            type: action,
                            payload: tasks
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    }
}