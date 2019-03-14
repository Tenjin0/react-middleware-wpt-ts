import {googleFetchThenPrint} from "../actions"

import { connect } from 'react-redux';

import FastprinterComponent from "../components/fastprinter"
import { Action } from 'redux';
import { IAppState } from '../interface';
import { RWMInterface } from '@wynd/redux-wps-middleware';
import { ThunkDispatch } from 'redux-thunk';
export interface IFastprinterContainerProps {
    name: string
    started: boolean
    fastprinterRequest: RWMInterface.IPluginStateRequest
    printText: (text: string) => void
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["fastprinter"] as RWMInterface.IPluginState 
    return {
        name: "fastprinter",
        started: plugin ? plugin.isStarted : null,
        fastprinterRequest:plugin ? plugin.request: null
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, Action>) => {

    return {
        printText: (text: string) => dispatch(googleFetchThenPrint(text))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FastprinterComponent);
