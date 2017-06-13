import axios from 'axios';
const API_URL = 'http://hipsterjesus.com/api/';

export const apicall = (data) => {
  return function(dispatch) {
    axios.get(API_URL)
    .then(response => {

      console.log(response.data.text);
      dispatch({
        type: "API_GET",
        payload: response.data.text
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}


