import { universalTerminal, RWMEnum, RWMInterface } from "@wynd/redux-wps-middleware"
import { connect } from 'react-redux';
import UniversalterminalComponent from "../components/universalterminal"
import { Dispatch } from 'redux';
import { IAppState } from '../interface'


export interface IUniversalTerminalContainerProps {
    name: string,
    started: boolean,
    universalTerminalRequest: RWMInterface.IPluginStateRequest,
    universalTerminalPush: RWMInterface.IPluginStatePush
    universalTerminalAsk: RWMInterface.IPluginStateAsk
    input: (amount: number) => void
    keyboardConfirm: (validation: boolean) => void,
    clearPluginAskState: () => void
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.UNIVERSALTERMINAL] as RWMInterface.IPluginState
    return {
        name: RWMEnum.EPluginName.UNIVERSALTERMINAL,
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
        clearPluginAskState: () => universalTerminal.dispatchClearPluginAskState()
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UniversalterminalComponent);