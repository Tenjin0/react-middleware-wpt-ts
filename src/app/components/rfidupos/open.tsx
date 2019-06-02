import * as React from 'react';
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { RWMEnum, RfidUpos } from "@wynd/redux-wps-middleware";

export interface IRfidUposOpenProps {
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

    onSubmitOpen() {
        console.log("form")
    }

    public render() {
        return (
            <Card>
                <Card.Header>
                    <Card.Title>Open</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form id="rfidupos-open" onSubmit={this.onSubmitOpen}>
                        <Form.Group as={Row} controlId="rdifuposStore">
                            <Form.Label column sm={2}>
                                Store
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Store: 12345" value={this.state.open.store} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="rdifuposTill">
                            <Form.Label column sm={2}>
                                Till
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Till: 12345" value={this.state.open.till} />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="rdifuposAcquisition">
                            <Form.Check type="checkbox" label="Acquisition" checked={this.state.open.acquisition} />
                        </Form.Group>
                        <Form.Group controlId="rdifuposAutodisable">
                            <Form.Check type="checkbox" label="Autodisable" checked={this.state.open.autodisable} />
                        </Form.Group>
                        <Button variant="primary" type="button" style={{ "float": "right" }}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
