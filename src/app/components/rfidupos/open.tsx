import * as React from 'react';
import { Form, Row, Col, Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Label, Input } from "reactstrap";
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
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.state.open[field] = value;
        this.setState(this.state);
    }

    onSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        const button = document.activeElement as HTMLButtonElement;

        switch (button.dataset.action) {

            case "open":
                rfidUpos.open(this.state.open)
                break;
            case "close":
                rfidUpos.close();
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
                    <CardTitle>Open</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form id="rfidupos-open" onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label sm={nameSize}>
                                Store
                            </Label>
                            <Col sm={controlSize}>
                                <Input disabled={this.props.opened} type="text" placeholder="Store: 12345" data-field="store" value={this.state.open.store} onChange={this.onInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label sm={nameSize}>
                                Till
                            </Label>
                            <Col sm={controlSize}>
                                <Input disabled={this.props.opened} type="text" placeholder="Till: 12345" data-field="till" value={this.state.open.till} onChange={this.onInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup check>
                            <Col sm={controlSize} style={{ paddingTop: "8px" }}>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                    disabled={this.props.opened}
                                    checked={this.state.open.acquisition}
                                    onChange={this.onInputChange}
                                    data-field="acquisition"
                                />
                                {' '}
                                <Label sm={nameSize} check>
                                    Acquisition
                                </Label>
                                {/* <Form.Check disabled={this.props.opened} type="checkbox" data-field="acquisition" checked={this.state.open.acquisition} onChange={this.onInputChange} /> */}
                            </Col>
                        </FormGroup>
                        <FormGroup>

                            <Col sm={controlSize} style={{ paddingTop: "8px" }}>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                    disabled={this.props.opened}
                                    checked={this.state.open.autodisable}
                                    onChange={this.onInputChange}
                                    data-field="autodisable"
                                />
                                {' '}
                                <Label sm={nameSize} check>
                                Autodisable
                                </Label>
                                {/* <Form.Check disabled={this.props.opened} type="checkbox" data-field="acquisition" checked={this.state.open.acquisition} onChange={this.onInputChange} /> */}
                            </Col>
                            <Label sm={nameSize}>
                                Autodisable
                            </Label>
                        </FormGroup>
                        <div className="d-flex justify-content-end">
                            {
                                this.props.opened && <Button variant="primary" data-action="close" type="submit" style={{ "float": "right" }}>
                                    Close
                                </Button>
                            }
                            {
                                !this.props.opened && <Button variant="primary" data-action="open" type="submit" style={{ "float": "right" }}>
                                    Open
                                </Button>
                            }

                        </div>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}
