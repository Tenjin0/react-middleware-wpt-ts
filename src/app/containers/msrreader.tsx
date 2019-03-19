import { connect } from 'react-redux';

import MSRReaderComponent from "../components/msrreader"
import { IAppState } from '../interface';
import { RWMInterface, RWMEnum } from '@wynd/redux-wps-middleware';

export interface IMSRReaderContainerProps {
    name: string
    started: boolean
    msrreaderRequest: RWMInterface.IPluginStateRequest
    msrreaderPush: RWMInterface.IPluginStatePush
    msrreaderAsk: RWMInterface.IPluginStateAsk
    printText: (text: string) => void
}




const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.MSRREADER] as RWMInterface.IPluginState 
    return {
        name: RWMEnum.EPluginName.MSRREADER,
        started: plugin ? plugin.isStarted : null,
        msrreaderRequest:plugin ? plugin.request: null,
        msrreaderPush: plugin ? plugin.push: null,
        msrreaderAsk: plugin ? plugin.ask: null
    }
}


export default connect(mapStateToProps, null)(MSRReaderComponent);