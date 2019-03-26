import { connect } from 'react-redux';

import CashkeeperComponent from "../components/cashkeeper"
import { Dispatch } from 'redux';
import { IAppState } from '../interface';
import { RWMInterface, fastprinter, clearWptStateAction, RWMEnum, cashkeeper } from '@wynd/redux-wps-middleware';


export interface ICashkeeperContainerProps {
    name: string
    started: boolean
    cashkeeperRequest: RWMInterface.IPluginStateRequest
    isTransactionRunning: boolean
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["cashkeeper"] as RWMInterface.IPluginState
    return {
        name: "cashkeeper",
        started: plugin ? plugin.isInitialized : null,
        cashkeeperRequest: plugin ? plugin.request : null,
        isTransactionRunning: plugin ? plugin.isTransactionRunning : null
    }
}


export default connect(mapStateToProps, null)(CashkeeperComponent);
