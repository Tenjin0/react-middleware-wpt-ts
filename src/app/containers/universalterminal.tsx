import * as React from 'react';
import { universalTerminal, RWMEnum, RWMInterface } from "@wynd/redux-wps-middleware"

import { connect } from 'react-redux';

import UniversalterminalComponent from "../components/universalterminal"
import { Dispatch } from 'redux';
import { IAppState } from '../interface';
import {Map} from "immutable"

export interface IUniversalTerminalContainerProps {
    name: string,
    started: boolean,
    universalTerminalRequest:  Map<any, any>
    universalTerminalPush:  Map<any, any>
    universalTerminalAsk:  Map<any, any>
    input: (amount: number) => void
    keyboardConfirm: (validation: boolean) => void,
    clearPluginAskState: () => void
}
const mapStateToProps = (state: IAppState) => {
    const wptState = state.wyndpostools as unknown as Map<any, any>
    const plugin = wptState.getIn(["plugins", "universalterminal"])
    return {
        name: RWMEnum.EPluginName.UNIVERSALTERMINAL,
        started: plugin ? plugin.get("isStarted") : null,
        universalTerminalRequest:plugin ? plugin.get("request"): null,
        universalTerminalPush: plugin ? plugin.get("push"): null,
        universalTerminalAsk: plugin ? plugin.get("ask"): null
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        input: (amount: number) => universalTerminal.input({amount: amount, currency: 978, transactionid: "000000001", operatorid:"02"}),
        keyboardConfirm: (validation: boolean) => universalTerminal.keyboardConfirm(validation),
        clearPluginAskState: () => universalTerminal.clearPluginAskState()
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UniversalterminalComponent);