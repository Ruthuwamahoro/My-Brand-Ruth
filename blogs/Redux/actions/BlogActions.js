import {ActionTypes} from '../constants/action-types'

export const fetchDataSuccess = (data) => {
 
    return {
        type: ActionTypes.FETCH_SUCCESS,
        payload: data
    }
}

export const fetchDataRequest = () => {
 
    return {
        type: ActionTypes.FETCH_REQUEST,
        payload: data
    }
}

export const fetchDataError = (error) => {
    return {
        type: ActionTypes.FETCH_ERROR,
        payload: error
    }
}


