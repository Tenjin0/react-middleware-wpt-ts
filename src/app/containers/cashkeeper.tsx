import { connect } from 'react-redux';

import CashkeeperComponent from "../components/cashkeeper"
import { Dispatch } from 'redux';
import { IAppState } from '../interface';
import { RWMInterface, fastprinter, clearWptStateAction, RWMEnum } from '@wynd/redux-wps-middleware';


export interface ICashkeeperContainerProps {
    name: string
    started: boolean
    cashkeeperRequest: RWMInterface.IPluginStateRequest
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["cashkeeper"] as RWMInterface.IPluginState
    return {
        name: "cashkeeper",
        started: plugin ? plugin.isStarted : null,
        cashkeeperRequest: plugin ? plugin.request : null
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CashkeeperComponent);
