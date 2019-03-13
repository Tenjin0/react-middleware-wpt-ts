import * as React from 'react';

export interface IMSRReaderContainerProps {
    name: string
    started: boolean
    msrreaderRequest: IPluginStateRequest
    msrreaderPush: IPluginStatePush
    msrreaderAsk: IPluginStateAsk
    printText: (text: string) => void
}

import { connect } from 'react-redux';

import MSRReaderComponent from "../components/msrreader"
import { Dispatch } from 'redux';
import { IPluginStateRequest, IPluginState, IPluginStatePush, IPluginStateAsk } from '../../../redux-wps-middleware/src/constants/interface';
import { IAppState } from '../interface';
import { EPluginName } from '../../../redux-wps-middleware/src/constants/enum';


const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[EPluginName.MSRREADER] as IPluginState 
    return {
        name: EPluginName.MSRREADER,
        started: plugin ? plugin.isStarted : null,
        msrreaderRequest:plugin ? plugin.request: null,
        msrreaderPush: plugin ? plugin.push: null,
        msrreaderAsk: plugin ? plugin.ask: null
    }
}


export default connect(mapStateToProps, null)(MSRReaderComponent);