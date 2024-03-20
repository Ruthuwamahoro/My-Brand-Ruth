import { combineReducers } from "redux"
import { blogReducer } from "./reducers/blogReducer"

const combiningReducer = combineReducers({
    blogData: blogReducer
})

export default combiningReducer

