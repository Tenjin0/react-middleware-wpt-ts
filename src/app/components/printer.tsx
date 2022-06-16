import * as React from 'react';
import { IPrinterContainerProps } from "../containers/printer"
import AppFieldSet from "./common/fieldset"
import { RWMEnum, printer } from '@wynd/redux-wps-middleware'
import { Form, Row, Col, Button, Card, FormGroup, Label, Input } from 'reactstrap';
export interface IPrinterState {
    text: string
}

export default class Fastprinter extends React.Component<IPrinterContainerProps, IPrinterState> {

    constructor(props: any) {

        super(props)
        this.state = {
            text: "test with middleware"
        }
    }

    onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        printer.printText(this.state.text)
    }

    onClickHTML = (e: React.MouseEvent<HTMLElement>) => {
        const html = '<!doctype html>' + 
       ' <html>' +
          '<head>' +
            '<title>Test API -> Printer</title>' +
          '</head>' +
         ' <body style="font-family: Arial, Sans-serif; width: 300px">' +
            '<div style="width: 100%; text-align: center;">' +
              '<img src="https://localhost:9963/wyndblack.png" alt="Afficher l\'image d\'origine" width="60" height="70" />' +
            '</div>' +
            '<br />' +
            '<div style="border: 1px solid black; padding: 5px;">ceci est un test</div>' +
          '</body>' +
        '</html>'

        printer.printHtml(html);
    }

    onChangeText = (e: React.FormEvent) => {
        e.preventDefault();
        const button = e.target as HTMLInputElement ;
        this.setState({
            text: button.value
        })
    }

    componentDidMount() {
        printer.on("started", () => {
            printer.getPrinters();
            printer.getCurrentPrinter();
        })
        

    }

    public render() {
        const nameSize = 5
        const controlSize = nameSize < 12 ? 12 - nameSize : 12
        return (
            <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.printerRequest ? this.props.printerRequest.status : RWMEnum.ERequestStatus.NONE}>
                <Form>
                    <FormGroup>
                        <Label sm={nameSize}>
                            Name
						</Label>
                        <Col sm={controlSize}>
                            <Input data-field="type" type="select">
                                {
                                    this.props.printers.map((printer) => {
                                        return (
                                            <option key={"printer-" + printer.name}>
                                                {printer.name}
                                            </option>
                                        )
                                    })
                                }
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label sm={nameSize}>
                            text
						</Label>
                        <Col sm={controlSize}>
                            <Input type="text" placeholder="Enter email" onChange={this.onChangeText} value={this.state.text}/>
                        </Col>
                    </FormGroup>
                    <div className="d-flex justify-content-end">
                        <Button disabled={this.props.printerRequest.status === RWMEnum.ERequestStatus.RUNNING} variant="primary" type="button" onClick={this.onClickHandler}>Print Text</Button>
                        <Button disabled={this.props.printerRequest.status === RWMEnum.ERequestStatus.RUNNING} variant="primary" type="button" onClick={this.onClickHTML}>Print HTML</Button>
                    </div>
                </Form>
            </AppFieldSet>

        );
    }
}
