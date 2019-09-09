import * as React from 'react';
import { connect } from 'react-redux';
import { RWMEnum, RWMInterface, RfidUpos } from "@wynd/redux-wps-middleware"
import { fromJS } from "immutable"
import RfidUposComponent from "../components/rfidupos";
import { IAppState } from '../interface'

export interface IRfidUposProps {
	name: string,
	opened: boolean,
	open: RfidUpos.IOpen,
	started: boolean,
	transaction: RfidUpos.ITransaction
}

const mapStateToProps = (state: any) => {

	const plugin = state.getIn(["wyndpostools", "plugins", RWMEnum.EPluginName.RFIDUPOS]) as any
	
	return {
		name: RWMEnum.EPluginName.RFIDUPOS,
		opened: plugin.get("opened"),
		open: plugin.get("open"),
		started: plugin ? plugin.get("isInitialized") : false,
		transaction: plugin && plugin.getIn(["pushes","transaction.update"]) ? plugin.getIn(["pushes","transaction.update"]).toJS() : RfidUpos.Controller.defaultTransaction
	}
}

export default connect(mapStateToProps, null)(RfidUposComponent);