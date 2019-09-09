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
    keyboardConfirm: (validation: boolean) => void,
    clearPluginAskState: () => void
}

const mapStateToProps = (state: any) => {

    const plugin = state.wyndpostools.getIn(["plugins", RWMEnum.EPluginName.UNIVERSALTERMINAL]) as any

    return {
        name: RWMEnum.EPluginName.UNIVERSALTERMINAL,
        started: plugin ? plugin.get("isStarted") : null,
        universalTerminalRequest:plugin ? plugin.get("request"): null,
        universalTerminalPush: plugin ? plugin.get("pushes") : null,
        universalTerminalAsk: plugin ? plugin.get("ask") : null
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        keyboardConfirm: (validation: boolean) => universalTerminal.keyboardConfirm(validation),
        clearPluginAskState: () => universalTerminal.dispatchClearPluginAskState()
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UniversalterminalComponent);