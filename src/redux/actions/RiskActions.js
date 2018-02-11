import * as types from './../constants/ActionTypes.js';

export const set_RISK = (risk) => {
  return {
    type: types.SET_RISK,
    value: risk
  }
}
