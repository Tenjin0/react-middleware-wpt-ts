import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { checkPropTypes } from 'prop-types';

export interface IUniversalTerminalProps {
}
export interface IUniversalTerminalState {
    amount: number
    text: string
}

export default class UniversalTerminal extends React.Component<IUniversalTerminalProps, IUniversalTerminalState> {

    constructor(props: any) {
        super(props)
        this.state = {
            amount: 1,
            text: ""
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e)
    }

    onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            text: ""
        })
    }

    onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(e.target.value)
        this.setState({
            ...this.state,
            amount: amount
        })
    }
    public render() {
        return (
			<fieldset className="scheduler-border">
            <legend className="scheduler-border">UniversalTerminal:</legend>
                <Form>
                    <FormGroup>
                        <Label for="utAmount">Amount</Label>
                        <Input onChange={this.onChangeText} type="number" name="ut_amount" id="utAmount" placeholder="amount to debit" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="utDisplay">Display</Label>
                        <Input onChange={this.onChangeText} type="text" disabled={true} name="ut_display" id="utDisplay" placeholder="message from TPE" />
                    </FormGroup>
                    <div>
                        <Button onClick={this.onClickHandler}>Submit</Button>
                        <Button color="success" onClick={this.onClickHandler}>Confirm</Button>
                    </div>

            </Form>
            </fieldset>

        );
    }
}
