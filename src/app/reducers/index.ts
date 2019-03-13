import { combineReducers, Reducer } from 'redux'
import { generateWpsReducer } from "@wynd/redux-wps-middleware"
import todoReducer from './todo'
import { EPluginName } from '@wynd/redux-wps-middleware';

const reducer: Reducer = combineReducers({
    wyndpostools: generateWpsReducer([EPluginName.FASTPRINTER], true),
    todo : todoReducer
})

export default reducer