import * as React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { RWMEnum, RfidUpos, } from "@wynd/redux-wps-middleware";
import AppFieldSet from "../common/fieldset"
import RfidUposOpen from "./open"


export interface IRfidUposProps {
}

export interface IRfidUposState {
}

export default class RfidUposComponent extends React.Component<IRfidUposProps, IRfidUposState> {

  constructor(props: IRfidUposProps) {
    
    super(props)
    this.state = {}
  }

  public render() {
    return (

      <AppFieldSet name={"rfidupos"} started={true} status={RWMEnum.ERequestStatus.NONE}>
        <Col>
          <RfidUposOpen/>
        </Col>
        <Col>
          <RfidUposOpen/>
        </Col>
      </AppFieldSet>
      
    );
  }
}
