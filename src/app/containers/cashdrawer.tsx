import { connect } from 'react-redux';

import CashDrawerComponent from "../components/cashdrawer"
import { IAppState } from '../interface';
import { RWMInterface, RWMEnum,  CashDrawer} from '@wynd/redux-wps-middleware';

export interface ICashDrawerContainerProps {

    name: string
    initialized: boolean
    cashdrawerRequest: RWMInterface.IPluginStateRequest
    cashdrawerPush: RWMInterface.IPluginStatePush
    cashdrawers: CashDrawer.ICashDrawer[]
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.CASHDRAWER] as RWMInterface.IPluginState 
    return {
        name: RWMEnum.EPluginName.CASHDRAWER,
        initialized: plugin ? plugin.isInitialized : false,
        cashdrawerRequest:plugin ? plugin.request: null,
        cashdrawerPush: plugin ? plugin.pushes: null,
        cashdrawers: plugin &&  plugin.responses && plugin.responses.cashdrawers ? plugin.responses.cashdrawers : []
    }
}


export default connect(mapStateToProps, null)(CashDrawerComponent);