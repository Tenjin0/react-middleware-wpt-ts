import { combineReducers, Reducer } from 'redux'
import todoReducer from './todo'
import { createWpsReducer, RWMEnum, RWMInterface, fastprinter, FastPrinter } from "@wynd/redux-wps-middleware"
import Fastprinter from '../components/printer';

const reducer: Reducer = combineReducers({
    wyndpostools: createWpsReducer([ RWMEnum.EPluginName.FASTPRINTER, RWMEnum.EPluginName.PRINTER, RWMEnum.EPluginName.RFIDUPOS ], { enable_warning: true}),
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