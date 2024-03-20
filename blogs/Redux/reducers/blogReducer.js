import {ActionTypes} from '../constants/action-types'
export const BlogReducer = (state={
    data: null,
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
        case  ActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case ActionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}






