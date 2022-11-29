import { legacy_createStore as createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import allReducer from './reducers'



const middleware = [thunk]

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;