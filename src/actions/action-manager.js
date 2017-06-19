import axios from 'axios';
const API_URI = 'http://localhost:3000/resumeData.json';

export const retrieveData = (data) => {
    return function(dispatch) {
        axios.get(API_URI)
            .then(response => {
                dispatch({
                    type: "API_GET_RESUME",
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


