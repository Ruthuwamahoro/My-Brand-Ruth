import { legacy_createStore as createStore} from 'redux'
import blogReducer from './reducers/blogReducer';
const store = createStore(blogReducer);
export default store