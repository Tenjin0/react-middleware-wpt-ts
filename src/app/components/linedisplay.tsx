import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import AppFieldSet from "./common/fieldset"
import { ILineDisplayContainerProps } from '../containers/linedisplay';
import { RWMEnum, linedisplay } from '@wynd/redux-wps-middleware';

export interface ILineDisplayContainerState {
	line1: string
	line2: string
}
export default class LineDisplay extends React.Component<ILineDisplayContainerProps, ILineDisplayContainerState> {

	constructor(props: ILineDisplayContainerProps) {
		super(props)
		this.state = {
			line1 : "",
			line2 : ""
		}
	}

	onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

		switch (e.currentTarget.id) {
			case "linedisplay_line1":
				this.setState({
					...this.state,
					line1: e.currentTarget.value
				})
				break;
			case "linedisplay_line2":
				this.setState({
					...this.state,
					line2: e.currentTarget.value
				})
				break;
		
			default:
				break;
		}
	}

	onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

		switch (e.currentTarget.id) {

			case "print":
				linedisplay.print({
					line1: this.state.line1,
					line2: this.state.line2
				})
				break;

			case "clean":
				linedisplay.clean()
				break;
		
			default:
				break;
		}
	}

	public render() {

		return (
			<AppFieldSet name={this.props.name} started={this.props.started} status={RWMEnum.ERequestStatus.NONE}>
				<Form>
					<FormGroup>
						<Label for="linedisplay_line1">Line 1: </Label>
						<Input type="text" name="linedisplay_line1" onChange={this.onChangeInput} id="linedisplay_line1" placeholder="message for linedisplay" value={this.state.line1}/>
					</FormGroup>

					<FormGroup>
						<Label for="linedisplay_line2">Line 2: </Label>
						<Input type="text" name="linedisplay_line2" onChange={this.onChangeInput}  id="linedisplay_line2" placeholder="message for linedisplay" value={this.state.line2}/>
					</FormGroup>

					<FormGroup>
						<Button color="success" data-choice="print" onClick={this.onClickHandler}>Print</Button>
						<Button color="danger" data-choice="clean" onClick={this.onClickHandler}>Clean</Button>
					</FormGroup>
				</Form>
			</AppFieldSet>

		);
	}
}
