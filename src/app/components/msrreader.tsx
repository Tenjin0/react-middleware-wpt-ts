import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export interface IMSRReaderProps {
}

export default class MSRReader extends React.Component<IMSRReaderProps, any> {

	onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			...this.state,
			text: ""
		})
	}
	public render() {
		return (
			<fieldset className="scheduler-border">
				<legend className="scheduler-border">MSRReader:</legend>
				<Form>
					<FormGroup>
						<Label for="utDisplay">Display</Label>
						<Input onChange={this.onChangeText} type="text" disabled={true} name="ut_display" id="utDisplay" placeholder="message from card" />
					</FormGroup>
				</Form>
			</fieldset>

		);
	}
}
