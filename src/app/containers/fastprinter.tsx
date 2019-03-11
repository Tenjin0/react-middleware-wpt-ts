import * as React from 'react';

export interface IFastprinterProps {
}

import { connect } from 'react-redux';

import FastprinterComponent from "../components/fastprinter"
import { Dispatch } from 'redux';

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    };
}
export default connect(null, null)(FastprinterComponent);
