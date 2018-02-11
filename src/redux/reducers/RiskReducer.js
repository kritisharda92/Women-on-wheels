import * as types from './../constants/ActionTypes.js';     //import all the action types, include all the packages

export default function RiskReducer(state, action) {
  switch (action.type) {

    case types.SET_RISK:
    return Object.assign({}, state, {
      ...state,
      risk : action.value
  });

    default:
      return state;
  }
}