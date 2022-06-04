// import { createStore } from "redux";
// import reducers from "./reducers/";
// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(reducers);
// export default store ; 



import {createStore , applyMiddleware} from 'redux'


import logger from  'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
const store =createStore(reducers ,applyMiddleware(logger, thunk))
export default store