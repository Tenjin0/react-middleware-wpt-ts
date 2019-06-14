
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tabs, Tab } from 'react-bootstrap';

import FastprinterContainer from "./containers/fastprinter"
import PrinterContainer from "./containers/printer"
import UniversalTerminalContainer from "./containers/universalterminal"
import MSRReaderContainer from "./containers/msrreader"
import CashKeeperContainer from "./containers/cashkeeper"
import SystemContainer from "./containers/system"
import LineDisplayContainer from "./containers/linedisplay"
import RfidUposContainer from "./containers/rfidupos"
import { getInitialState, RWMEnum } from "@wynd/redux-wps-middleware"
class App extends React.Component<{}, {}> {
    render() {
        const { plugins } = getInitialState();

        return (
            <div className="todoapp">
                <Container>
                    <br/>
                    <Tabs defaultActiveKey="printer" id="plugins-tabs">
                        { plugins[RWMEnum.EPluginName.FASTPRINTER] && <Tab eventKey="fastprinter" title="Fastprinter">
                            <FastprinterContainer />
                        </Tab>}
                        { plugins[RWMEnum.EPluginName.PRINTER] && <Tab eventKey="printer" title="Printer">
                            <PrinterContainer />
                        </Tab>}
                        { plugins[RWMEnum.EPluginName.MSRREADER] && <Tab eventKey="mssreader" title="MSRReader">
                            <MSRReaderContainer />
                        </Tab>}
                        { plugins[RWMEnum.EPluginName.UNIVERSALTERMINAL] && <Tab eventKey="universalterminal" title="UniversalTerminal">
                            <UniversalTerminalContainer />
                        </Tab>}
                        { plugins[RWMEnum.EPluginName.LINEDISPLAY] && <Tab eventKey="linedisplay" title="LineDisplay">
                            <LineDisplayContainer />
                        </Tab>}
                        { plugins[RWMEnum.EPluginName.CASHKEEPER] && <Tab eventKey="cashkeeper" title="CashKeeper">
                            <CashKeeperContainer />
                        </Tab>}
                        { plugins[RWMEnum.EPluginName.RFIDUPOS] && <Tab eventKey="rfidupos" title="RfidUpos">
                            <RfidUposContainer />
                        </Tab>}
                    </Tabs>
                </Container>
            </div>
        )
    }
}

export default App;