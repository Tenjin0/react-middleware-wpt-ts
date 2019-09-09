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

const mapStateToProps = (state: any) : ISystemContainerProps => {

    const plugin = state.wyndpostools.getIn(["plugins", RWMEnum.EPluginName.SYSTEM]) as any

    return {
        name: RWMEnum.EPluginName.SYSTEM,
        started: plugin ? plugin.get("isStarted") : null,
        request:plugin ? plugin.get("request"): null,
        version: plugin.getIn(["pushes", "version"]) ? plugin.getIn(["pushes", "version"]) : "",
        wyndserial: plugin.getIn(["pushes", "wyndserial"]) ? plugin.getIn(["pushes", "wyndserial"]) : ""
    }
}


export default connect(mapStateToProps, null)(systemComponent);