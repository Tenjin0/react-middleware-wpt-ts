import * as React from 'react';
import { universalTerminal } from "../../../redux-wps-middleware/src/wrappers"

export interface IUniversalTerminalContainerProps {
    name: string,
    started: boolean,
    universalTerminalRequest: IPluginStateRequest,
    universalTerminalPush: IPluginStatePush
    universalTerminalAsk: IPluginStateAsk
    input: (amount: number) => void
    keyboardConfirm: (validation: boolean) => void,
    clearPluginAskState: () => void
}

import { connect } from 'react-redux';

import UniversalterminalComponent from "../components/universalterminal"
import { Dispatch } from 'redux';
import { EPluginName } from '../../../redux-wps-middleware/src/constants/enum';
import { IAppState } from '../interface';
import { IPluginState, IPluginStateRequest, IPluginStatePush, IPluginStateAsk } from '../../../redux-wps-middleware/src/constants/interface';

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[EPluginName.UNIVERSALTERMINAL] as IPluginState
    return {
        name: EPluginName.UNIVERSALTERMINAL,
        started: plugin ? plugin.isStarted : null,
        universalTerminalRequest:plugin ? plugin.request: null,
        universalTerminalPush: plugin ? plugin.push: null,
        universalTerminalAsk: plugin ? plugin.ask: null
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        input: (amount: number) => universalTerminal.input({amount: amount, currency: 978, transactionid: "000000001", operatorid:"02"}),
        keyboardConfirm: (validation: boolean) => universalTerminal.keyboardConfirm(validation),
        clearPluginAskState: () => universalTerminal.clearPluginAskState()
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UniversalterminalComponent);