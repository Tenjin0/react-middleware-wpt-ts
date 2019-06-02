
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FastprinterContainer from "./containers/fastprinter"
import UniversalTerminalContainer from "./containers/universalterminal"
import MSRReaderContainer from "./containers/msrreader"
import CashKeeperContainer from "./containers/cashkeeper"
import SystemContainer from "./containers/system"
import LineDisplayContainer from "./containers/linedisplay"
import RfidUposContainer from "./containers/rfidupos"

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="todoapp">
                <Container>
                    <Row>
                        <Col xs="6">
                            <FastprinterContainer />
                        </Col>
                        <Col xs="6">
                            <MSRReaderContainer />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <UniversalTerminalContainer />
                        </Col>
                       
                    </Row>
                   
                    <Row>
                        <Col xs="6">
                            <SystemContainer />
                        </Col>
                        <Col xs="6">
                            <LineDisplayContainer />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">    
                            <CashKeeperContainer />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">    
                            <RfidUposContainer />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;