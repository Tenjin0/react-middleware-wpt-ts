import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
// import { wpsReducer } from '../../../redux-wps-middleware/src';

const reducer: Reducer = combineReducers({
    // wyndpostools: wpsReducer,
    todo : todoReducer
})

export default reducer