import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {itemReducer} from "../reducers/itemReducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(itemReducer);

export default store;