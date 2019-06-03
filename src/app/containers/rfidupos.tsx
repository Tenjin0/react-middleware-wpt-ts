import * as React from 'react';
import { connect } from 'react-redux';
import { RWMEnum, RWMInterface, RfidUpos } from "@wynd/redux-wps-middleware"

import RfidUposComponent from "../components/rfidupos";
import { IAppState } from '../interface'

export interface IRfidUposProps {
	name: string,
	opened: boolean,
	open: RfidUpos.IOpen,
	started: boolean,
	transaction: RfidUpos.ITransaction
}

const mapStateToProps = (state: IAppState) => {

	const plugin = state.wyndpostools.plugins[RWMEnum.EPluginName.RFIDUPOS] as RfidUpos.IPluginState
	return {

		name: RWMEnum.EPluginName.RFIDUPOS,
		opened: plugin.opened,
		open: plugin.open,
		started: plugin ? plugin.isInitialized : false,
		transaction: plugin && plugin.pushes["transaction.update"] ? plugin.pushes["transaction.update"] : RfidUpos.Controller.defaultTransaction
	}
}

export default connect(mapStateToProps, null)(RfidUposComponent);