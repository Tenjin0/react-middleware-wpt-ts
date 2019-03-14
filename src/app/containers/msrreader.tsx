import * as React from 'react';

import { connect } from 'react-redux';

import MSRReaderComponent from "../components/msrreader"
import {  } from 'redux';
import { RWMEnum, RWMInterface} from '@wynd/redux-wps-middleware';
import { IAppState } from '../interface';
import {Map} from "immutable"
export interface IMSRReaderContainerProps {
    name: string
    started: boolean
    msrreaderRequest: Map<any, any>
    msrreaderPush: Map<any, any>
    msrreaderAsk: Map<any, any>
    printText: (text: string) => void
}

const mapStateToProps = (state: IAppState) => {

    const wptState = state.wyndpostools as unknown as Map<any, any>
    const plugin: Map<any, any> = wptState.getIn(["plugins", "universalterminal"])
    return {
        name: RWMEnum.EPluginName.MSRREADER,
        started: plugin ? plugin.get("isStarted") : null,
        msrreaderRequest:plugin ? plugin.get("request"): null,
        msrreaderPush: plugin ? plugin.get("push"): null,
        msrreaderAsk: plugin ? plugin.get("ask"): null
    }
}


export default connect(mapStateToProps, null)(MSRReaderComponent);