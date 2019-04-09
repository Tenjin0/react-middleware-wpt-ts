import * as React from 'react';
import { ICashkeeperContainerProps } from "../containers/cashkeeper"
import AppFieldSet from "./common/fieldset"
import { RWMEnum, cashkeeper, CashKeeper } from '@wynd/redux-wps-middleware'
import { Form, FormGroup, Label, Input, Button, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"

export interface ICashkeeperState {
    amount: number
    manualPayment: number
    paymentTypes: CashKeeper.IPaymentType[]
    dropdownOpen: boolean
    isTransactionRunning: boolean
    selectedPaymentType: CashKeeper.IPaymentType
}

export default class Cashkeeper extends React.Component<ICashkeeperContainerProps, ICashkeeperState> {

    constructor(props: any) {

        super(props)
        this.state = {
            amount: 1000,
            manualPayment: 0,
            paymentTypes: [],
            dropdownOpen: false,
            isTransactionRunning: false,
            selectedPaymentType: null
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
                        code: this.state.selectedPaymentType.code,
                        name: this.state.selectedPaymentType.name
                    }
                }
                cashkeeper.setManualPayment([manualPayment])
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

    toggleDropDown = () => {

        this.setState({
            ...this.state,
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const amount = parseInt(e.target.value)

            if (e.target.id === "ut-amountmanualpayment") {
                return this.setState({
                    ...this.state,
                    manualPayment: isNaN(amount) ? 0: amount
                })
            }

            if (e.target.id === "ut-amount") {
                return this.setState({
                    ...this.state,
                    amount: isNaN(amount) ? 0: amount
                })
            }
       
    }

    onChangManualPayment = (e: React.ChangeEvent<HTMLInputElement>) => {

        const amount = parseFloat(e.target.value)
        this.setState({
            ...this.state,
            manualPayment: amount
        })
    }

    onSelectPayment = (e: React.MouseEvent<HTMLButtonElement>) => {

        const selectedPayment: CashKeeper.IPaymentType[] = this.props.paymentTypes.filter((paymentType) => {

            return paymentType.code === e.currentTarget.dataset.payment
        })
        
        if (selectedPayment.length > 0) {

            this.setState({
                ...this.state,
                selectedPaymentType: selectedPayment[0],
                dropdownOpen: false
            })
        }
       
    }
    getPaymentName = (code: string) => {

        let payment = this.props.paymentTypes.filter((payment) => {
            return payment.code === code
        })

        if (payment.length > 0) {
            return payment[1].name
        }
        return ""

    }
    componentWillReceiveProps(nextProps: ICashkeeperContainerProps) {

        const nextState = {
            ...this.state
        }
        if (nextProps.paymentTypes) {
            nextState.paymentTypes =  nextProps.paymentTypes
        }
        if (nextProps.isTransactionRunning) {
            nextState.isTransactionRunning = nextProps.isTransactionRunning
        }
        if (nextProps.isTransactionRunning === true && this.state.isTransactionRunning === false) {
            cashkeeper.getPaymentTypes()
        }

        this.setState(nextState)
    }

    public render() {

        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.cashkeeperRequest ? this.props.cashkeeperRequest.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label for="CashkeeperText">Amount</Label>
                        <Input disabled={this.props.isTransactionRunning} onChange={this.onChangeAmount} type="number" name="ut-amount" id="ut-amount" placeholder="amount to enter" min={0} value={this.state.amount} />
                    </FormGroup>

                    {!this.props.isTransactionRunning ?

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
                                <InputGroup>
                                    <Input onChange={this.onChangeAmount} type="number" name="ut-amountmanualpayment" id="ut-amountmanualpayment" placeholder="amount for manual payment to enter" value={this.state.manualPayment ? this.state.manualPayment : ""} min={0} max={this.state.amount? this.state.amount : null} />
                                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                        <DropdownToggle caret>
                                            {this.state.selectedPaymentType ? this.state.selectedPaymentType.name : "Select payment type"}
                                        </DropdownToggle>
                                        <DropdownMenu persist={false}>
                                            {
                                                this.state.paymentTypes.map((payment: CashKeeper.IPaymentType) => (
                                                    <Button className="dropdown-item"key={"payment_" + payment.code.toLowerCase()} data-payment={payment.code} onClick={this.onSelectPayment}>
                                                        {payment.name}
                                                    </Button>
                                                ))
                                            }
                                        </DropdownMenu>
                                    </InputGroupButtonDropdown>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button disabled={this.state.selectedPaymentType === null} data-action="manual_payment" onClick={this.onClickHandler}>Manual payment</Button>
                            </FormGroup>
                        </React.Fragment>
                    }
                </Form>
            </AppFieldSet>

        );
    }
}
