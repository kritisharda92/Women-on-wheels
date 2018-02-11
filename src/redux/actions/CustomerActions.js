import * as types from './../constants/ActionTypes.js';

export const setCustomer = (customer) => {
  return {
    type: types.SET_CUSTOMER,
    value: customer
  }
}

export const setLoginType = (loginType) => {
  return {
    type: types.SET_TYPE_OF_LOGIN,
    value: loginType
  }
}

export const setLocations = (locations) => {
  return {
    type: types.SET_LOCATIONS,
    value: locations
  }
}
