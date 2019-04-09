import { connect } from 'react-redux';

import MSRReaderComponent from "../components/msrreader"
import { IAppState } from '../interface';
import { RWMInterface, RWMEnum } from '@wynd/redux-wps-middleware';

export interface IMSRReaderContainerProps {

    name: string
    started: boolean
    msrreaderPush: RWMInterface.IPluginStatePush
}

export interface IMSRReaderContainerProps {

    name: string
    started: boolean
    msrreaderPush: RWMInterface.IPluginStatePush
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.MSRREADER] as RWMInterface.IPluginState 
    return {
        name: RWMEnum.EPluginName.MSRREADER,
        started: plugin ? plugin.isStarted : null,
        msrreaderPush: plugin ? plugin.pushes: null,
    }
}


export default connect(mapStateToProps, null)(MSRReaderComponent);