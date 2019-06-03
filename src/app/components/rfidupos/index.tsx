import * as React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { RWMEnum, RfidUpos, } from "@wynd/redux-wps-middleware";

import AppFieldSet from "../common/fieldset"
import RfidUposOpen from "./open"
import RfidUposTransaction from "./transaction"
import { IRfidUposProps }from "../../containers/rfidupos"

export interface IRfidUposState {
}

export default class RfidUposComponent extends React.Component<IRfidUposProps, IRfidUposState> {

  constructor(props: IRfidUposProps) {

    super(props)
    this.state = {}
  }

  componentDidMount() {
    // console.log(this.props)
  }

  public render() {
    return (

      <AppFieldSet name={this.props.name} started={this.props.started} status={this.props.transaction.status as RWMEnum.ERequestStatus}>
        <Row>
          <Col sm={12} md={6}>
            <RfidUposOpen open={this.props.open}/>
          </Col>
          <Col sm={12} md={6}>
            <RfidUposTransaction status={this.props.transaction.status}/>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </AppFieldSet>
      
    );
  }
}
