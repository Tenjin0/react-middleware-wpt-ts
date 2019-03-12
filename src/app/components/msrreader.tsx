import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AppFieldSet from "./common/fieldset"
import { IMSRReaderContainerProps } from '../containers/msrreader';
import { ERequestStatus } from '../../../redux-wps-middleware/src/constants/enum';


export default class MSRReader extends React.Component<IMSRReaderContainerProps, any> {


	public render() {
		const display = this.props.msrreaderPush && this.props.msrreaderPush.event === "data" ? this.props.msrreaderPush.data : ""
		return (
			<AppFieldSet name={this.props.name} started={this.props.started} status={this.props.msrreaderRequest ? this.props.msrreaderRequest.status : ERequestStatus.NONE}>
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
