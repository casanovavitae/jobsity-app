import axios from 'axios';

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

export const putData = (action,url,text,check) => {
    console.log(action,url);
    return function(dispatch) {
        axios.put(url, {
            data: {
                text: text,
                completed: check
            }
        })
            .then(response => {
                console.log("Response",response)
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
