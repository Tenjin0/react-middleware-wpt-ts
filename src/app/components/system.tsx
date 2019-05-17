import * as React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import AppFieldSet from "./common/fieldset"
import { ISystemContainerProps } from '../containers/system';
import { RWMInterface, RWMEnum, system, System } from '@wynd/redux-wps-middleware';

export default class SystemComponent extends React.Component<ISystemContainerProps, any> {


	componentDidMount() {

		system.on("version", (version) => {
			console.log(version)
		})

		system.on("wyndserial", (wyndserial) => {
			console.log(wyndserial)
		})

		setTimeout(() => {
			if(!system.isConnectedToWPT()) {
				system.dispatchFakePushAction("wyndserial", "FAKE00075be4e" + Math.floor(Math.random() * 10))
			}
		}, 0)

		system.customizePluginReducer(function(state: System.IPluginState, action: RWMInterface.IWPTAction, isConnected: boolean) {

			if (!isConnected && (action.eventAction === "wyndserial")) {

				const newState: System.IPluginState = {
					...state,
					request: {
						...state.request,
						status: RWMEnum.ERequestStatus.COMPLETED
					},
					pushes : {
						...state.pushes,
						wyndserial: "FAKE00075be4e" + Math.floor(Math.random() * 10)
					}
				}
				system.emit("wyndserial", newState.pushes.wyndserial)
				return newState
			}
		})

	}

	onClick(e: React.MouseEvent<HTMLButtonElement>) {
		
		switch (e.currentTarget.dataset.action) {
			case "version":
				system.getVersion();
				break;
			case "wyndserial":
			system.getWyndserial();
				break;
		
			default:
				break;
		}
	}

	public render() {
		return (
			<AppFieldSet name={this.props.name} started={this.props.started} status={this.props.request ? this.props.request.status : RWMEnum.ERequestStatus.NONE}>
				<Form>
					<FormGroup>
						<Label for="system-version">version</Label>
						<InputGroup>
							<Input type="text" disabled={true} name="system-version" id="system-version" value={this.props.version}/>
							<InputGroupAddon addonType="append"><Button data-action="version" onClick={this.onClick}>@</Button></InputGroupAddon>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<Label for="system-wyndserial">wyndserial</Label>
						<InputGroup>
							<Input type="text" readOnly name="system-version" id="system-wyndserial" value={this.props.wyndserial}/>
							<InputGroupAddon addonType="append"><Button data-action="wyndserial" onClick={this.onClick}>@</Button></InputGroupAddon>
						</InputGroup>
					</FormGroup>
				</Form>
			</AppFieldSet>

		);
	}
}
