import { connect } from 'react-redux';

import CashkeeperComponent from "../components/cashkeeper"
import { IAppState } from '../interface';
import { RWMInterface, CashKeeper } from '@wynd/redux-wps-middleware';


export interface ICashkeeperContainerProps {
    name: string
    started: boolean
    cashkeeperRequest: RWMInterface.IPluginStateRequest
    isTransactionRunning: boolean
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["cashkeeper"] as CashKeeper.ICashKeeperState

    return {
        name: "cashkeeper",
        started: plugin ? plugin.isInitialized : null,
        cashkeeperRequest: plugin ? plugin.transactionRequest : null,
        isTransactionRunning: plugin ? plugin.isTransactionRunning : null
    }
}


export default connect(mapStateToProps, null)(CashkeeperComponent);
