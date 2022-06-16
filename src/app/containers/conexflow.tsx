import { universalTerminal, RWMEnum, RWMInterface } from "@wynd/redux-wps-middleware"
import { connect } from 'react-redux';
import ConexflowComponent from "../components/conexflow"
import { Dispatch } from 'redux';
import { IAppState } from '../interface'


export interface IConexflowContainerProps {
    name: string,
    started: boolean,
    request: RWMInterface.IPluginStateRequest,
    push: RWMInterface.IPluginStatePush
    clearPluginAskState: () => void
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.CONEXFLOW] as RWMInterface.IPluginState

    return {
        name: RWMEnum.EPluginName.CONEXFLOW,
        started: plugin ? plugin.isStarted : null,
        request: plugin ? plugin.request: null,
        push: plugin ? plugin.pushes: null,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        clearPluginAskState: () => universalTerminal.dispatchClearPluginAskState()
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConexflowComponent);