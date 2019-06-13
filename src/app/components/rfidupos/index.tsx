import * as React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { RWMEnum, RfidUpos, rfidUpos} from "@wynd/redux-wps-middleware"

import AppFieldSet from "../common/fieldset"
import RfidUposOpen from "./open"
import RfidUposTransaction from "./transaction"
import RfidUposTags from "./tags"
import { IRfidUposProps }from "../../containers/rfidupos"

export interface IRfidUposState {
}

export default class RfidUposComponent extends React.Component<IRfidUposProps, IRfidUposState> {

  constructor(props: IRfidUposProps) {

    super(props)
    this.state = {}
  }

  componentDidMount() {
    rfidUpos.on("started", (data) => {
      console.log("started", data);
    })
    rfidUpos.on("initialized", () => {
      console.log("initialized")
    })
    rfidUpos.on("open", (data) => {
      console.log("open", data);
    })
    rfidUpos.on("close", () => {
      console.log("close")
    })
    // console.log(this.props)
  }

  public render() {
    return (

      <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.transaction.status as RWMEnum.ERequestStatus}>
        <Row>
          <Col sm={12} md={6}>
            <RfidUposOpen opened={this.props.opened} open={this.props.open}/>
          </Col>
          <Col sm={12} md={6}>
            <RfidUposTransaction status={this.props.transaction.status} opened={this.props.opened}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <RfidUposTags tags={this.props.transaction.tags}/>
          </Col>
        </Row>
      </AppFieldSet>
      
    );
  }
}
