import * as React from 'react';
import { IFastprinterContainerProps } from "../containers/fastprinter"
import AppFieldSet from "./common/fieldset"
import { RWMEnum } from '@wynd/redux-wps-middleware';
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
export interface IFastprinterState {
    text: string
}
export default class Fastprinter extends React.Component<IFastprinterContainerProps, IFastprinterState> {

    constructor(props: any) {
        super(props)
        this.state = {
            text: "test with middleware"
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        // console.log(e.target.value)
        this.props.printText(this.state.text)
    }

    onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            text: e.target.value
        })
    }

    public render() {

        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.fastprinterRequest ? this.props.fastprinterRequest.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label for="fastprinterText">Text</Label>
                        <Input onChange={this.onChangeText} type="text" name="fastprinter_text" id="fastprinterText" placeholder="text to print" value={this.state.text} />
                    </FormGroup>
                    <Button onClick={this.onClickHandler}>Submit</Button>
                </Form>
            </AppFieldSet>

        );
    }
}
