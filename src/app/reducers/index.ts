import { combineReducers, Reducer } from 'redux'
import { generateWpsReducer } from "../../../redux-wps-middleware/src/"
import todoReducer from './todo'
import { EPluginName } from '../../../redux-wps-middleware/src/constants/enum';

const reducer: Reducer = combineReducers({
    wyndpostools: generateWpsReducer([EPluginName.FASTPRINTER], true),
    todo : todoReducer
})

export default reducer