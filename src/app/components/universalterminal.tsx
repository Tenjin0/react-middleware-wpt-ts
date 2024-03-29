import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { RWMEnum, universalTerminal, UniversalTerminal} from '@wynd/redux-wps-middleware';

import { IUniversalTerminalContainerProps } from '../containers/universalterminal';
import AppFieldSet from "./common/fieldset"

export interface IUniversalTerminalState {
    amount: number
    showAsk: boolean
    display: string
}

export default class UniversalTerminaComponent extends React.Component<IUniversalTerminalContainerProps, IUniversalTerminalState> {

    constructor(props: any) {
        super(props)
        this.state = {
            amount: 100,
            showAsk: false,
            display: ""
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        const choice =  e.currentTarget.dataset && e.currentTarget.dataset.choice
        switch (choice) {
            case "confirm":
                this.props.keyboardConfirm(true)
            break;
            case "abort":
                this.props.keyboardConfirm(false)
            break;
            default:
                const total: UniversalTerminal.ITransaction = {amount: this.state.amount, currency: 978, transactionid: "000000001", operatorid:"02"}
                universalTerminal.input(total);
            break;
        }
    }

    onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {

        const amount = parseFloat(e.target.value)
        this.setState({
            ...this.state,
            amount: amount
        })
    }

    componentWillReceiveProps(nextProps: IUniversalTerminalContainerProps) {
        const newState : IUniversalTerminalState  = {
            ...this.state
        };

        if(nextProps.universalTerminalRequest && nextProps.universalTerminalRequest.status === RWMEnum.ERequestStatus.ERROR) {
            newState.display = nextProps.universalTerminalRequest.error.message
        } else if(nextProps.universalTerminalAsk && nextProps.universalTerminalAsk.currentEventAction) {
                newState.display = nextProps.universalTerminalAsk.parameters.data;
        } else if(nextProps.universalTerminalPush && nextProps.universalTerminalPush.display) {
            newState.display = nextProps.universalTerminalPush.display
        } else {
            newState.display = ""
        }
        newState.showAsk = nextProps.universalTerminalAsk &&  nextProps.universalTerminalAsk.currentEventAction ? true: false

        this.setState(newState)

        if(nextProps.universalTerminalAsk && (nextProps.universalTerminalAsk.status === RWMEnum.EAskSTatus.CONFIRMED || nextProps.universalTerminalAsk.status === RWMEnum.EAskSTatus.ABORTED)) {
            this.props.clearPluginAskState()
        }

    }

    public render() {
        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.universalTerminalRequest ? this.props.universalTerminalRequest.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label for="utAmount">Amount</Label>
                        <Input onChange={this.onChangeAmount} type="number" name="ut_amount" id="utAmount" placeholder="amount to debit" value={this.state.amount} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="utDisplay">Display</Label>
                        <Input type="text" disabled={true} name="ut_display" id="utDisplay" placeholder="message from TPE" value={this.state.display} />
                    </FormGroup>
                    <div>
 
                        {!this.state.showAsk && <Button onClick={this.onClickHandler}>Submit</Button> }
                        {this.state.showAsk && <div>
                            <Button color="success" data-choice="confirm" onClick={this.onClickHandler}>Confirm</Button>
                            <Button color="danger" data-choice="abort" onClick={this.onClickHandler}>Abort</Button>
                        </div>}

                    </div>

            </Form>
            </AppFieldSet>

        );
    }
}
