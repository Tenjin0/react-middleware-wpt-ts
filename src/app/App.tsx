
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FastprinterContainer from "./containers/fastprinter"
import UniversalTerminalContainer from "./containers/universalterminal"
import MSRReaderContainer from "./containers/msrreader"
import CashKeeperContainer from "./containers/cashkeeper"
import CashDrawerContainer from "./containers/cashdrawer"
import LineDisplayContainer from "./containers/linedisplay"

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
                        <Col xs="12">    
                            <CashKeeperContainer />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <CashDrawerContainer />
                        </Col>
                        <Col xs="6">
                            <LineDisplayContainer />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;