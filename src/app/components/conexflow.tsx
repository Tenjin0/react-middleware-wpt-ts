import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AppFieldSet from "./common/fieldset"
import { RWMEnum, conexflow, Conexflow} from '@wynd/redux-wps-middleware';
import { IConexflowContainerProps } from '../containers/conexflow';

export interface IConexflowState {
    amount: number
    showAck: boolean
}

export default class ConexflowComponent extends React.Component<IConexflowContainerProps, IConexflowState> {

    constructor(props: any) {
        super(props)
        this.state = {
            amount: 100,
            showAck: false,
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        const choice =  e.currentTarget.dataset && e.currentTarget.dataset.choice
        switch (choice) {
            case "ack":
                conexflow.ack()
            break;
            case "abort":
                // this.props.keyboardConfirm(false)
            break;
            default:
                const total: Conexflow.IInput = { amount: this.state.amount }
                conexflow.sale(total)
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

    componentWillReceiveProps(nextProps: IConexflowContainerProps) {
        const newState : IConexflowState  = {
            ...this.state
        };

        console.log(nextProps)
        if (nextProps.request && nextProps.request.status === RWMEnum.ERequestStatus.COMPLETED && (nextProps.request.currentEventAction === "sale"  || nextProps.request.currentEventAction === 'refund')) {
            newState.showAck = true
            this.setState(newState)
        } else if (  newState.showAck ) {
            newState.showAck = false
            this.setState(newState)
        }
        // if(nextProps.universalTerminalRequest && nextProps.universalTerminalRequest.status === RWMEnum.ERequestStatus.ERROR) {
        //     newState.display = nextProps.universalTerminalRequest.error.message
        // } else if(nextProps.universalTerminalAsk && nextProps.universalTerminalAsk.currentEventAction) {
        //         newState.display = nextProps.universalTerminalAsk.parameters.data;
        // } else if(nextProps.universalTerminalPush && nextProps.universalTerminalPush.display) {
        //     newState.display = nextProps.universalTerminalPush.display
        // } else {
        //     newState.display = ""
        // }
        // newState.showAsk = nextProps.universalTerminalAsk &&  nextProps.universalTerminalAsk.currentEventAction ? true: false

        // this.setState(newState)

        // if(nextProps.universalTerminalAsk && (nextProps.universalTerminalAsk.status === RWMEnum.EAskSTatus.CONFIRMED || nextProps.universalTerminalAsk.status === RWMEnum.EAskSTatus.ABORTED)) {
        //     this.props.clearPluginAskState()
        // }

    }

    public render() {
        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.request ? this.props.request.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label for="utAmount">Amount</Label>
                        <Input onChange={this.onChangeAmount} type="number" name="ut_amount" id="utAmount" placeholder="amount to debit" value={this.state.amount} />
                    </FormGroup>
                    <div className='d-flex'>
                        <Button onClick={this.onClickHandler}>Debit</Button>
                        {this.state.showAck && <div>
                            <Button color="success" data-choice="ack" onClick={this.onClickHandler}>Ack</Button>
                        </div>}

                    </div>

            </Form>
            </AppFieldSet>

        );
    }
}
