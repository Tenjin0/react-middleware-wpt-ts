import * as React from 'react';
import { ICashkeeperContainerProps } from "../containers/cashkeeper"
import AppFieldSet from "./common/fieldset"
import { RWMEnum, cashkeeper, CashKeeper } from '@wynd/redux-wps-middleware'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

export interface ICashkeeperState {
    amount: number
}

export default class Cashkeeper extends React.Component<ICashkeeperContainerProps, ICashkeeperState> {

    constructor(props: any) {

        super(props)
        this.state = {
            amount: 1000
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        switch (e.currentTarget.dataset.action) {
            case 'cancel':
                cashkeeper.cancelTransaction()
                break;
        
            default:
                const total: CashKeeper.ITotal = {
                    value: this.state.amount,
                    currency: "EUR"
                }
                cashkeeper.makeTransaction(total)
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

    public render() {

        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.cashkeeperRequest ? this.props.cashkeeperRequest.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label for="CashkeeperText">Text</Label>
                        <Input onChange={this.onChangeAmount} type="number" name="ut_amount" id="utAmount" placeholder="amount to enter" value={this.state.amount} />
                    </FormGroup>
                    <Button data-action="transaction" onClick={this.onClickHandler} >Make transaction </Button>

                    { this.props.isTransactionRunning &&
                    <React.Fragment>
                        <FormGroup>
                            <Button onClick={this.onClickHandler} data-action="cancel">Cancel transaction </Button>
                        </FormGroup>
                    </React.Fragment>}
                </Form>
            </AppFieldSet>

        );
    }
}
