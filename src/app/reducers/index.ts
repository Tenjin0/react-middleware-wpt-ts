import { Reducer } from 'redux'
import { combineReducers } from 'redux-immutable'
import todoReducer from './todo'
import { createWpsReducer, RWMEnum, RWMInterface, fastprinter, FastPrinter } from "@wynd/redux-wps-middleware"
import Fastprinter from '../components/fastprinter';

const reducer: Reducer = combineReducers({
    wyndpostools: createWpsReducer([ RWMEnum.EPluginName.SYSTEM, RWMEnum.EPluginName.FASTPRINTER, RWMEnum.EPluginName.RFIDUPOS, RWMEnum.EPluginName.UNIVERSALTERMINAL ], {immutable: true}),
    todo: todoReducer
})

// fastprinter.customizePluginReducer(function(state: FastPrinter.IPluginState, action: RWMInterface.IWPTAction) {

//     const newState: FastPrinter.IPluginState = {
//         ...state,
//     }

//     if (action.type ==="@wpsMiddleware/FASTPRINTER_PRINTTEXT/REQUEST") {
//         newState.request.status = RWMEnum.ERequestStatus.COMPLETED
//         return newState;
//     }
//     return null;
// })



export default reducer