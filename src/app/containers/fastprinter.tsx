import * as React from 'react';
import {googleFetchThenPrint} from "../actions"

import { connect } from 'react-redux';

import FastprinterComponent from "../components/fastprinter"
import { Dispatch } from 'redux';
import { IAppState } from '../interface';
import { RWMInterface, fastprinter } from '@wynd/redux-wps-middleware';
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

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
    printText: (text: string) => fastprinter.printText(text)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FastprinterComponent);
