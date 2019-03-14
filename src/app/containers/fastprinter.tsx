import {googleFetchThenPrint} from "../actions"

import { connect } from 'react-redux';

import FastprinterComponent from "../components/fastprinter"
import { Action, Dispatch } from 'redux';
import { IAppState } from '../interface';
import { RWMInterface, fastprinter } from '@wynd/redux-wps-middleware';
import { isImmutable, Map } from "immutable";
export interface IFastprinterContainerProps {
    name: string
    started: boolean
    fastprinterRequest: Map<any, any>
    printText: (text: string) => void
}

const mapStateToProps = (state: IAppState) => {
    const wptState = state.wyndpostools as unknown as Map<any, any>
    const plugin: Map<any, any> = wptState.getIn(["plugins", "fastprinter"])
    return {
        name: "fastprinter",
        started: plugin ? plugin.get("isStarted") : null,
        fastprinterRequest:plugin ? plugin.get("request"): null,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        printText: (text: string) => fastprinter.printText(text)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FastprinterComponent);
