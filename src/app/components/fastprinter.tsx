import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export interface IFastprinterProps {
}
export interface IFastprinterState {
    text: string
}
export default class Fastprinter extends React.Component<IFastprinterProps, IFastprinterState> {

    constructor(props: any) {
        super(props)
        this.state = {
            text: ""
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e)
    }

    onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            text: e.target.value
        })
    }
    public render() {
        return (
			<fieldset className="scheduler-border">
            <legend className="scheduler-border">Fastprinter:</legend>
				<Form>
					<FormGroup>
						<Label for="fastprinterText">Text</Label>
						<Input onChange={this.onChangeText}type="text" name="fastprinter_text" id="fastprinterText" placeholder="text to print" />
					</FormGroup>
					<Button onClick={this.onClickHandler}>Submit</Button>
				</Form>
			</fieldset>
        );
    }
}
