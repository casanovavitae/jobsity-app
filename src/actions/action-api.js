import axios from 'axios';
/*const API_URL = 'http://hipsterjesus.com/api/';*/
const API_URI = 'http://localhost:3000/resumeData.json';

/*export const apicall = (data) => {
  return function(dispatch) {
    axios.get(API_URL)
    .then(response => {

      console.log(response.data.text);
      dispatch({
        type: "API_GET",
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export const apicalldata = (data) => {
    console.log("HEyyyy");
    return function(dispatch) {
        axios.get(API_URI)
            .then(response => {
                console.log(response);
                dispatch({
                    type: "API_GET1",
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}*/

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


