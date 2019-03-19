import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
import { RWMEnum , createWpsReducer } from "@wynd/redux-wps-middleware"

const reducer: Reducer = combineReducers({
    wyndpostools: createWpsReducer(),
    todo: todoReducer
})

export default reducer