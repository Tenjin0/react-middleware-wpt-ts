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

const mapStateToProps = (state: any) => {

    const plugin = state.wyndpostools.getIn(["plugins", RWMEnum.EPluginName.MSRREADER]) as Map<keyof RWMInterface.IPluginState,  RWMInterface.IPluginState>
    return {
        name: RWMEnum.EPluginName.MSRREADER,
        started: plugin ? plugin.get("isStarted") : null,
        msrreaderPush: plugin ? plugin.get("pushes"): null,
    }
}


export default connect(mapStateToProps, null)(MSRReaderComponent);