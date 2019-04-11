import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
import { createWpsReducer, RWMEnum } from "@wynd/redux-wps-middleware"

const reducer: Reducer = combineReducers({
    wyndpostools: createWpsReducer([ RWMEnum.EPluginName.CASHDRAWER]),
    todo: todoReducer
})

export default reducer