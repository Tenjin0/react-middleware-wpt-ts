import * as React from 'react';
import { RfidUpos, rfidUpos } from "@wynd/redux-wps-middleware"
import { Form, Row, Col, Button, Card, CardHeader, CardTitle, CardBody, FormGroup, Label, Input } from "reactstrap";

export interface IRidUposTransactionProps {
	status: RfidUpos.TStatus
	opened: boolean
}

export interface IRidUposTransactionState {
	id: number,
	type: RfidUpos.EType.SALE
}

export default class RidUposTransaction extends React.Component<IRidUposTransactionProps, IRidUposTransactionState> {

	constructor(props: IRidUposTransactionProps) {
		super(props);

		this.state = {
			id: 1,
			type: RfidUpos.EType.SALE
		}
	}

	onInputChange = (e: React.FormEvent) => {

        const target = e.currentTarget as HTMLInputElement;
		const field = target.dataset.field;
        const value = target.value;
        this.state[field] = value;
        this.setState(this.state);
	}

    onSubmit = (e: React.FormEvent) => {

		e.preventDefault();

        const button = document.activeElement as HTMLButtonElement ;

		switch (button.dataset.action) {
			case "start":
				const transaction : RfidUpos.IPartialTransaction = {
					id: this.state.id,
					type: this.state.type
				}
				rfidUpos.startTransaction(transaction)
				break;
			case "pause":
				rfidUpos.pauseTransaction()
				break;
			case "confirm":
				rfidUpos.confirmTransaction()
				break;
			case "cancel":
				rfidUpos.cancelTransaction()
				break;
			case "clear":
				rfidUpos.clearTransaction()
				break;
			default:
				break;
		}

	}

 	public render() {

		const nameSize = 5
        const controlSize = nameSize < 12 ? 12 - nameSize : 12
		return (
			<Card>
			<CardHeader>
				<CardTitle>Transaction</CardTitle>
			</CardHeader>
			<CardBody>
				<Form id="rfidupos-transaction" onSubmit={this.onSubmit}>
					<FormGroup>
						<Label sm={nameSize}>
							ID
						</Label>
						<Col sm={controlSize}>
							<Input type="number" data-field="id" placeholder="id: 1" value={String(this.state.id)} onChange={this.onInputChange}/>
						</Col>
					</FormGroup>
					<FormGroup>
						<Label sm={nameSize}>
							Type
						</Label>
						<Col sm={controlSize}>
							<Input type="select" data-field="type" value={this.state.type} onChange={this.onInputChange}>
								<option>SALE</option>
								<option>RETURN</option>
							</Input>
						</Col>
					</FormGroup>
					<div className="d-flex justify-content-end">
						{
							RfidUpos.EStatus.STARTED !== this.props.status &&
							<Button variant="primary" disabled={!this.props.opened} type="submit" data-action="start" style={{marginLeft: "15px"}}>
								Start
							</Button>
						}
						{
							RfidUpos.EStatus.STARTED === this.props.status &&
							<Button variant="primary" disabled={!this.props.opened} type="submit" data-action="pause" style={{marginLeft: "15px"}}>
								Pause
							</Button>
						}
						{
							[RfidUpos.EStatus.STARTED].includes(this.props.status as RfidUpos.EStatus) &&
							<Button variant="primary" disabled={!this.props.opened} type="submit" data-action="cancel" style={{marginLeft: "15px"}}>
								Cancel
							</Button> &&
							<Button variant="primary" disabled={!this.props.opened} type="submit" data-action="confirm" style={{marginLeft: "15px"}}>
								Confirm
							</Button>
						}
						{
							[RfidUpos.EStatus.CONFIRMED, RfidUpos.EStatus.CANCELLED].includes(this.props.status as RfidUpos.EStatus) &&
							<Button variant="primary" disabled={!this.props.opened} type="submit" data-action="clear" style={{marginLeft: "15px"}}>
								Clear
							</Button>
						}
					</div>
				</Form>
			</CardBody>
		</Card>
		);
	}
}
