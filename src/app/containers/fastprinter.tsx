import * as React from 'react';
import { fastprinter } from "../../../redux-wps-middleware/src/wrappers"


import { connect } from 'react-redux';

import FastprinterComponent from "../components/fastprinter"
import { Dispatch } from 'redux';
import { IAppState } from '../interface';
import { IPluginState, IPluginStateRequest } from '../../../redux-wps-middleware/src/constants/interface';

export interface IFastprinterContainerProps {
    name: string
    started: boolean
    fastprinterRequest: IPluginStateRequest
    printText: (text: string) => void
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["fastprinter"] as IPluginState 
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
