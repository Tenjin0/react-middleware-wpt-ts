import { connect } from 'react-redux';

import CashkeeperComponent from "../components/cashkeeper"
import { IAppState } from '../interface';
import { RWMInterface, CashKeeper, RWMEnum } from '@wynd/redux-wps-middleware';


export interface ICashkeeperContainerProps {
    name: string
    started: boolean
    cashkeeperRequest: RWMInterface.IPluginStateRequest
    isTransactionRunning: boolean
    paymentTypes: CashKeeper.IPaymentType[]
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["cashkeeper"] as CashKeeper.IPluginState
    return {
        name: "cashkeeper",
        started: plugin ? plugin.isInitialized : null,
        cashkeeperRequest: plugin ? plugin.transactionRequest : null,
        isTransactionRunning: plugin ? plugin.isTransactionRunning : null,
        paymentTypes: plugin ? plugin.responses.payment_types : null
    }
}


export default connect(mapStateToProps, null)(CashkeeperComponent);
