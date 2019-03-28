import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
import { createWpsReducer, RWMEnum } from "@wynd/redux-wps-middleware"

const reducer: Reducer = combineReducers({
    wyndpostools: createWpsReducer([ RWMEnum.EPluginName.UNIVERSALTERMINAL, RWMEnum.EPluginName.CASHKEEPER ]),
    todo: todoReducer
})

export default reducer