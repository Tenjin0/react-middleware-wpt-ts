import { connect } from 'react-redux';
import { RWMInterface, RWMEnum, System } from '@wynd/redux-wps-middleware';

import AppComponent from "../App"
import { IAppState } from '../interface';

export interface IAppContainerProps {

    isConnected: boolean
    version: string | null
}

const mapStateToProps = (state: IAppState) : IAppContainerProps => {

    return {
        isConnected: state.wyndpostools.isConnected,
        version: state.wyndpostools.version,
    }
}


export default connect(mapStateToProps, null)(AppComponent);