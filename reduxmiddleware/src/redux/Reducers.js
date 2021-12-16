import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './Action';

const initialState = {
    loading: false,
    users: [],
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: 
            return {
                ...state,
                loading : true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error : null
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload,
                users: []
            }
        default:
            return state;
    }
}
