import { combineReducers, Reducer } from 'redux'
import { wpsReducer } from "../../../redux-wps-middleware/src/"
import todoReducer from './todo'

const reducer: Reducer = combineReducers({
    wyndpostools: wpsReducer,
    todo : todoReducer
})

export default reducer