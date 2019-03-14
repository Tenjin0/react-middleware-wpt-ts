import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
import { RWMEnum, generateWpsReducer, RWMInterface } from "@wynd/redux-wps-middleware"
const opts: RWMInterface.TOptionState = {
    autogenerate: false,
    immutable: true
}
const reducer: Reducer = combineReducers({
    wyndpostools: generateWpsReducer([RWMEnum.EPluginName.FASTPRINTER, RWMEnum.EPluginName.UNIVERSALTERMINAL], opts),
    todo : todoReducer
})

export default reducer