import { connect } from 'react-redux';

import FastprinterComponent from "../components/fastprinter"
import { Action, Dispatch } from 'redux';
import { IAppState } from '../interface';
import { RWMInterface, fastprinter, clearWptStateAction, RWMEnum } from '@wynd/redux-wps-middleware';
export interface IFastprinterContainerProps {
    name: string
    started: boolean
    fastprinterRequest: RWMInterface.IPluginStateRequest
    printText: (text: string) => void
    clearFastprinterRequest: (pluginName: RWMEnum.EPluginName, subField : RWMEnum.ESubField) => void
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["fastprinter"] as RWMInterface.IPluginState 
    return {
        name: "fastprinter",
        started: plugin ? plugin.isStarted : null,
        fastprinterRequest:plugin ? plugin.request: null
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
    printText: (text: string) => fastprinter.printText(text),
    clearFastprinterRequest : () => dispatch(clearWptStateAction(RWMEnum.EPluginName.FASTPRINTER, RWMEnum.ESubField.REQUEST))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FastprinterComponent);
