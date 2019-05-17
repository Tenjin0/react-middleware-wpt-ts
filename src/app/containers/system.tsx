import { connect } from 'react-redux';

import systemComponent from "../components/system"
import { IAppState } from '../interface';
import { RWMInterface, RWMEnum, System } from '@wynd/redux-wps-middleware';
export interface ISystemContainerProps {

    name: string
    started: boolean
    version: string
    wyndserial: string
    request: RWMInterface.IPluginStateRequest
}

const mapStateToProps = (state: IAppState) : ISystemContainerProps => {

    const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.SYSTEM] as  System.IPluginState
    return {
        name: RWMEnum.EPluginName.SYSTEM,
        started: plugin ? plugin.isStarted : null,
        request:plugin ? plugin.request: null,
        version: plugin && plugin.pushes && plugin.pushes.version ? plugin.pushes.version : "",
        wyndserial: plugin && plugin.pushes && plugin.pushes.wyndserial ? plugin.pushes.wyndserial : ""
    }
}


export default connect(mapStateToProps, null)(systemComponent);