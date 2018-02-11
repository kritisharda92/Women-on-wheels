import * as types from './../constants/ActionTypes.js';
import CustomerReducer from './CustomerReducer.js';
import RiskReducer from './FinanceReducer.js';
/**
 * Initial state object with empty assignments
 * @type {Object}
 */
export const initialState = {
    customer: {
        fname:'',
        location:'',
        email:''
    },
    search:'',
    signUp: false,
    locations:[]
}

export default function FinanceReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        
        case types.SET_CUSTOMER:
        case types.SET_TYPE_OF_LOGIN:
        case types.SET_LOCATIONS:
            return CustomerReducer(state, action);

        default:
            return state;
    }
}
