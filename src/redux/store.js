import { createStore } from "redux";
import reducers from "./reducers/";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers);
export default store ; 