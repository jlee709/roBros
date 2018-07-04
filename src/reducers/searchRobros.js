import { CHANGE_SEARCHFIELD } from "../actions/constants.js";

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
