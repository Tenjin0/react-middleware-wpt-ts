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

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.LINEDISPLAY] as RWMInterface.IPluginState

    return {
        name: RWMEnum.EPluginName.LINEDISPLAY,
        started: plugin ? plugin.isStarted : null,
        lineDisplayRequest:plugin ? plugin.request: null,
    }
}


export default connect(mapStateToProps, null)(LineDisplayComponent);