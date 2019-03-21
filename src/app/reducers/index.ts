import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
import { createWpsReducer, universalTerminal, RWMEnum, RWMInterface } from "@wynd/redux-wps-middleware"

const reducer: Reducer = combineReducers({
    wyndpostools: createWpsReducer(),
    todo: todoReducer
})

export default reducer