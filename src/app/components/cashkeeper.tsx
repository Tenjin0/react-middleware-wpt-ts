import * as React from 'react';
import { ICashkeeperContainerProps } from "../containers/cashkeeper"
import AppFieldSet from "./common/fieldset"
import { RWMEnum, cashkeeper, CashKeeper } from '@wynd/redux-wps-middleware'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

export interface ICashkeeperState {
    amount: number
    manualPayment: number
}

export default class Cashkeeper extends React.Component<ICashkeeperContainerProps, ICashkeeperState> {

    constructor(props: any) {

        super(props)
        this.state = {
            amount: 1000,
            manualPayment: 0
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        switch (e.currentTarget.dataset.action) {
            case 'cancel':
                cashkeeper.cancelTransaction()
                break;
            case 'manual_payment':
                const manualPayment: CashKeeper.IManualPayment = {
                    amount: {
                        total: this.state.manualPayment,
                        currency: "EUR",
                        count: 1,
                        value: this.state.manualPayment
                    },
                    type: {
                        code: "BANK_NOTES",
                        name: "bank note"
                    }
                }
                cashkeeper.manualPayment([manualPayment])
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

    onChangManualPayment = (e: React.ChangeEvent<HTMLInputElement>) => {

        const amount = parseFloat(e.target.value)
        this.setState({
            ...this.state,
            manualPayment: amount
        })
    }

    public render() {

        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.cashkeeperRequest ? this.props.cashkeeperRequest.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label for="CashkeeperText">Amount</Label>
                        <Input onChange={this.onChangeAmount} type="number" name="ut_amount" id="utAmount" placeholder="amount to enter" min={0} value={this.state.amount} />
                    </FormGroup>

                    { !this.props.isTransactionRunning ?

                        <FormGroup>
                            <Button data-action="transaction" onClick={this.onClickHandler} >Make transaction </Button>
                        </FormGroup> 
                        :
                        <React.Fragment>
                            <FormGroup>
                                <Button onClick={this.onClickHandler} data-action="cancel">Cancel transaction </Button>
                            </FormGroup>
                            <FormGroup>
                                <Label for="CashkeeperText">Amount</Label>
                                <Input onChange={this.onChangeAmount} type="number" name="ut_amount" id="utAmount" placeholder="amount to enter" value={this.state.manualPayment} min={0} max={this.state.amount}/>
                            </FormGroup>
                            <FormGroup>
                                <Button data-action="manual_payment" onClick={this.onClickHandler}>Manual payment</Button>
                            </FormGroup> 
                        </React.Fragment>
                    }
                </Form>
            </AppFieldSet>

        );
    }
}
