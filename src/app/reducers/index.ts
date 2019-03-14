import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
import { RWMEnum, generateWpsReducer } from "@wynd/redux-wps-middleware"

const reducer: Reducer = combineReducers({
    wyndpostools: generateWpsReducer([RWMEnum.EPluginName.FASTPRINTER], true),
    todo : todoReducer
})

export default reducer