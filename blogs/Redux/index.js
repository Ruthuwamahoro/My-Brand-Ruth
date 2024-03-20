import { combineReducers } from "redux"
import { blogReducer } from "./reducers/blogReducer"

const reducer = combineReducers({
    blog: blogReducer
})

export default reducer

