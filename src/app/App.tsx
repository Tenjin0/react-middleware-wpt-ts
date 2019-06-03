
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tabs, Tab } from 'react-bootstrap';

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
                    <br/>
                    <Tabs defaultActiveKey="rfidupos" id="plugins-tabs">
                        <Tab eventKey="fastprinter" title="Fastprinter">
                            <FastprinterContainer />
                        </Tab>
                        <Tab eventKey="mssreader" title="MSRReader">
                            <MSRReaderContainer />
                        </Tab>
                        <Tab eventKey="universalterminal" title="UniversalTerminal">
                            <UniversalTerminalContainer />
                        </Tab>
                        <Tab eventKey="linedisplay" title="LineDisplay">
                            <LineDisplayContainer />
                        </Tab>
                        <Tab eventKey="cashkeeper" title="CashKeeper">
                            <CashKeeperContainer />
                        </Tab>
                        <Tab eventKey="rfidupos" title="RfidUpos">
                            <RfidUposContainer />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        )
    }
}

export default App;