import { connect } from 'react-redux';

import CashkeeperComponent from "../components/cashkeeper"
import { IAppState } from '../interface';
import { RWMInterface, RWMEnum, CashKeeper } from '@wynd/redux-wps-middleware';


export interface ICashkeeperContainerProps {

    name: string
    started: boolean
    cashkeeperRequest: RWMInterface.IPluginStateRequest
    isTransactionRunning: boolean
    paymentTypes: CashKeeper.IPaymentType[]
}

const mapStateToProps = (state: any) => {

    const plugin = state.getIn(["wyndpostools", "plugins", RWMEnum.EPluginName.CASHKEEPER]) as any

    return {
        name: "cashkeeper",
        started: plugin ? plugin.get("isInitialized") : null,
        cashkeeperRequest: plugin ? plugin.get("transactionRequest") : null,
        isTransactionRunning: plugin ? plugin.get("isTransactionRunning") : null,
        paymentTypes: plugin ? plugin.getIn(["responses", "payment_types"]) : null
    }
}


export default connect(mapStateToProps, null)(CashkeeperComponent);
