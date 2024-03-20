import {ActionTypes} from '../constants/action-types'
export const BlogReducer = (state={
    data: [],
    loading: false,
    error: null
}, action) => {
    switch(action.type){
        case ActionTypes.FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ActionTypes.FETCH_SUCCESS:
            console.log("data fetch", action.payload)
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case ActionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
        }
}






