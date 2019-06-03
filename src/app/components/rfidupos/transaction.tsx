import * as React from 'react';
import { RfidUpos, rfidupos } from "@wynd/redux-wps-middleware"
import { Form, Row, Col, Button, Card } from "react-bootstrap";

export interface IRidUposTransactionProps {
	status: RfidUpos.TStatus
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

    onSubmit (e: React.FormEvent) {

		e.preventDefault();
		const target = e.currentTarget as HTMLButtonElement;

		switch (target.dataset.action) {
			case "start":
				const transaction : RfidUpos.IPartialTransaction = {
					id: this.state.id,
					type: this.state.type
				}
				rfidupos.startTransaction(transaction)
				break;
			case "pause":
				rfidupos.pauseTransaction()
				break;
			case "confirm":
				rfidupos.confirmTransaction()
				break;
			case "cancel":
				rfidupos.cancelTransaction()
				break;
			case "clear":
				rfidupos.clearTransaction()
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
			<Card.Header>
				<Card.Title>Transaction</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form id="rfidupos-transaction" onSubmit={this.onSubmit}>
					<Form.Group as={Row} controlId="rdifuposTransactionID">
						<Form.Label column sm={nameSize}>
							ID
						</Form.Label>
						<Col sm={controlSize}>
							<Form.Control type="number" data-field="id" placeholder="id: 1" value={String(this.state.id)} onChange={this.onInputChange}/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="rdifuposTransactionType">
						<Form.Label column sm={nameSize}>
							Type
						</Form.Label>
						<Col sm={controlSize}>
							<Form.Control as="select" data-field="type" value={this.state.type} onChange={this.onInputChange}>
								<option>SALE</option>
								<option>RETURN</option>
							</Form.Control>
						</Col>
					</Form.Group>
					<div className="d-flex justify-content-end">
						{
							RfidUpos.EStatus.STARTED !== this.props.status &&
							<Button variant="primary" type="submit" data-action="start" style={{marginLeft: "15px"}}>
								Start
							</Button>
						}
						{
							RfidUpos.EStatus.STARTED === this.props.status &&
							<Button variant="primary" type="submit" data-action="pause" style={{marginLeft: "15px"}}>
								Pause
							</Button>
						}
						{
							[RfidUpos.EStatus.STARTED].includes(this.props.status as RfidUpos.EStatus) &&
							<Button variant="primary" type="submit" data-action="cancel" style={{marginLeft: "15px"}}>
								Cancel
							</Button> &&
							<Button variant="primary" type="submit" data-action="confirm" style={{marginLeft: "15px"}}>
								Confirm
							</Button>
						}
						{
							[RfidUpos.EStatus.CONFIRMED, RfidUpos.EStatus.CANCELLED].includes(this.props.status as RfidUpos.EStatus) &&
							<Button variant="primary" type="submit" data-action="clear" style={{marginLeft: "15px"}}>
								Clear
							</Button>
						}
					</div>
				</Form>
			</Card.Body>
		</Card>
		);
	}
}
