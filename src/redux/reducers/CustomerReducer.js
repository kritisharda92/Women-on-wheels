import * as types from './../constants/ActionTypes.js';

export default function CustomerReducer (state, action) {
  switch (action.type) {

    case types.SET_CUSTOMER:
      return Object.assign({}, state, {
        ...state,
        customer : action.value
      }
    );

    case types.SET_TYPE_OF_LOGIN:
    return Object.assign({}, state, {
      ...state,
      signUp : action.value
    }
  );

  case types.SET_LOCATIONS:
    return Object.assign({}, state, {
      ...state,
      locations : action.value
    }
  );
     
     
    default:
      return state;
    }

}