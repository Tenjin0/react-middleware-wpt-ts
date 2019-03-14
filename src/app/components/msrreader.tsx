import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AppFieldSet from "./common/fieldset"
import { IMSRReaderContainerProps } from '../containers/msrreader';
import { RWMEnum } from '@wynd/redux-wps-middleware';

export default class MSRReader extends React.Component<IMSRReaderContainerProps, any> {


	public render() {
		const display = this.props.msrreaderPush && this.props.msrreaderPush.event === "data" ? this.props.msrreaderPush.data : ""
		return (
			<AppFieldSet name={this.props.name} started={this.props.started} status={this.props.msrreaderRequest ? this.props.msrreaderRequest.status : RWMEnum.ERequestStatus.NONE}>
				<Form>
					<FormGroup>
						<Label for="utDisplay">Display</Label>
						<Input type="text" disabled={true} name="ut_display" id="utDisplay" placeholder="message from card" value={display}/>
					</FormGroup>
				</Form>
			</AppFieldSet>

		);
	}
}
