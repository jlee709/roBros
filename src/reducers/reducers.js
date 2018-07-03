import { CHANGE_SEARCHFIELD } from "../actions/constants.js";

const initialState = {
  searchField: ""
};

export const searchRobros = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
