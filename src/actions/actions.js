import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBROS_PENDING,
  REQUEST_ROBROS_FAILED,
  REQUEST_ROBROS_SUCCESS
} from "./constants.js";

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const requestRobros = () => dispatch => {
  dispatch({ type: REQUEST_ROBROS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response
      .json()
      .then(data => dispatch({ type: REQUEST_ROBROS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_ROBROS_FAILED, payload: error }))
  );
};
