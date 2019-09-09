import { linedisplay, RWMEnum, RWMInterface } from "@wynd/redux-wps-middleware"
import { connect } from 'react-redux';
import LineDisplayComponent from "../components/linedisplay"
import { Dispatch } from 'redux';
import { IAppState } from '../interface'


export interface ILineDisplayContainerProps {
    name: string,
    started: boolean,
    lineDisplayRequest: RWMInterface.IPluginStateRequest,
}

const mapStateToProps = (state: any) => {

    const plugin = state.getIn(["wyndpostools", "plugins", RWMEnum.EPluginName.LINEDISPLAY]) as Map<keyof RWMInterface.IPluginState,  RWMInterface.IPluginState>

    return {
        name: RWMEnum.EPluginName.LINEDISPLAY,
        started: plugin ? plugin.get("isStarted") : null,
        lineDisplayRequest:plugin ? plugin.get("request"): null,
    }
}


export default connect(mapStateToProps, null)(LineDisplayComponent);