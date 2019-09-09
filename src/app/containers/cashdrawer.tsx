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

const mapStateToProps = (state: any) => {
    
    const plugin = state.getIn(["wyndpostools", "plugins", RWMEnum.EPluginName.CASHDRAWER]) as any

    return {
        name: RWMEnum.EPluginName.CASHDRAWER,
        initialized: plugin ? plugin.get("isInitialized") : false,
        cashdrawerRequest:plugin ? plugin.get("request"): null,
        cashdrawerPush: plugin ? plugin.get("pushes"): null,
        cashdrawers: plugin && plugin.getIn(["responses", "cashdrawers"]) ? plugin.getIn(["responses", "cashdrawers"]) : []
    }
}


export default connect(mapStateToProps, null)(CashDrawerComponent);