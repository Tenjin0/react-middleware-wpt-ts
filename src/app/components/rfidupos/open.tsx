import * as React from 'react';
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { RWMEnum, RfidUpos, rfidUpos } from "@wynd/redux-wps-middleware";

export interface IRfidUposOpenProps {
    open: RfidUpos.IOpen
    opened: boolean
}

export interface IRfidUposOpenState {
    open: RfidUpos.IOpen
}

export default class RfidUposOpen extends React.Component<IRfidUposOpenProps, IRfidUposOpenState> {

    constructor(props: IRfidUposOpenProps) {

        super(props)
        this.state = {
            open: {
                store: "",
                till: "",
                acquisition: true,
                autodisable: false
            }
        }
    }

    onInputChange = (e: React.FormEvent) => {
        const target = e.currentTarget as HTMLInputElement;
        const field = target.dataset.field;
        const value = target.type === "checkbox"? target.checked : target.value;
        this.state.open[field] = value;
        this.setState(this.state);
    }

    onSubmitOpen = (e: React.FormEvent) => {
        e.preventDefault();
        rfidUpos.open(this.state.open)
    }

    public render() {

        const nameSize = 5
        const controlSize = nameSize < 12 ? 12 - nameSize : 12
        return (
            <Card>
                <Card.Header>
                    <Card.Title>Open</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form id="rfidupos-open" onSubmit={this.onSubmitOpen}>
                        <Form.Group as={Row} controlId="rdifuposStore">
                            <Form.Label column sm={nameSize}>
                                Store
                            </Form.Label>
                            <Col sm={controlSize}>
                                <Form.Control type="text" placeholder="Store: 12345" data-field="store" value={this.state.open.store} onChange={this.onInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="rdifuposTill">
                            <Form.Label column sm={nameSize}>
                                Till
                            </Form.Label>
                            <Col sm={controlSize}>
                                <Form.Control type="text" placeholder="Till: 12345" data-field="till" value={this.state.open.till} onChange={this.onInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="rdifuposAcquisition">
                            <Form.Label column sm={nameSize}>
                                Acquisition
                            </Form.Label>
                            <Col sm={controlSize} style={{ paddingTop: "8px"}}>
                                <Form.Check type="checkbox" data-field="acquisition" checked={this.state.open.acquisition} onChange={this.onInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group  as={Row} controlId="rdifuposAutodisable">
                            <Form.Label column sm={nameSize}>
                                Autodisable
                            </Form.Label>
                            <Col sm={controlSize} style={{ paddingTop: "8px"}}>
                                <Form.Check type="checkbox"data-field="autodisable" checked={this.state.open.autodisable} onChange={this.onInputChange}/>
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ "float": "right" }}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
