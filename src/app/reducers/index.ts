import { combineReducers } from 'redux'
import todoReducer from './todo'
import { wpsReducer } from '../../../redux-wps-middleware/src';

const reducer = combineReducers({
    wyndpostools: wpsReducer,
    todo : todoReducer
})

export default reducer