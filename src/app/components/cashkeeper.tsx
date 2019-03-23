import * as React from 'react';
import { ICashkeeperContainerProps } from "../containers/cashkeeper"
import AppFieldSet from "./common/fieldset"
import { RWMEnum, fastprinter } from '@wynd/redux-wps-middleware'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

export interface ICashkeeperState {
    text: string
}

export default class Cashkeeper extends React.Component<ICashkeeperContainerProps, ICashkeeperState> {

    constructor(props: any) {

        super(props)
        this.state = {
            text: "test with middleware"
        }
    }

    public render() {

        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.cashkeeperRequest ? this.props.cashkeeperRequest.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label for="CashkeeperText">Text</Label>
                        <Input type="text" name="Cashkeeper_text" id="CashkeeperText" placeholder="text to print" value={this.state.text} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </AppFieldSet>

        );
    }
}
