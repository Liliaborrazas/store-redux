import {createStore} from 'redux';

const initialState = {}
const store = createStore(()=>{},initialState,
window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;