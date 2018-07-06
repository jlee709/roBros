import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBROS_FAILED,
  REQUEST_ROBROS_SUCCESS,
  REQUEST_ROBROS_PENDING
} from "../actions/constants.js";

const initialState = {
  searchfield: ""
};

export const searchRobros = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchfield: action.payload });
    default:
      return state;
  }
};

const initialStateRobros = {
  isPending: false,
  robros: [],
  error: ""
};

// dipatching actions Payloads
export const requestRobros = (state = initialStateRobros, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBROS_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_ROBROS_SUCCESS:
      return Object.assign({}, state, {
        robros: action.payload,
        isPending: false
      });

    case REQUEST_ROBROS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });

    default:
      return state;
  }
};
