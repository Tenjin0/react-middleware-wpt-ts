import * as React from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';


import AppFieldSet from "./components/common/fieldset"
import FastprinterContainer from "./containers/fastprinter"
import PrinterContainer from "./containers/printer"
import UniversalTerminalContainer from "./containers/universalterminal"
import MSRReaderContainer from "./containers/msrreader"
import CashKeeperContainer from "./containers/cashkeeper"
import LineDisplayContainer from "./containers/linedisplay"
import RfidUposContainer from "./containers/rfidupos"
import ConexflowContainer from "./containers/conexflow"
import { getInitialState, RWMEnum } from "@wynd/redux-wps-middleware"
import { IAppContainerProps } from './containers/App';

interface IAppState {
    activeTab: string
}
class App extends React.Component<IAppContainerProps, IAppState> {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);

        this.state = {
            activeTab: "8"
        }
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const { plugins } = getInitialState();

        return (
            <div className="todoapp">
                <Container>

                    <AppFieldSet name='wpt' version={this.props.version} status={RWMEnum.ERequestStatus.NONE} started={this.props.isConnected}>
                        <br />
                        <Nav tabs>
                            {
                                plugins[RWMEnum.EPluginName.FASTPRINTER] && <NavItem>
                                    <NavLink onClick={() => { this.toggle('1') }}>
                                        Fastprinter
                                    </NavLink>
                                </NavItem>
                            }
                            {
                                plugins[RWMEnum.EPluginName.PRINTER] &&
                                <NavItem>
                                    <NavLink onClick={() => { this.toggle('2') }}>
                                        Printer
                                    </NavLink>
                                </NavItem>
                            }
                            {
                                plugins[RWMEnum.EPluginName.MSRREADER] && <NavItem>
                                    <NavLink onClick={() => { this.toggle('3') }}>
                                        MSREADER
                                    </NavLink>
                                </NavItem>
                            }
                            {
                                plugins[RWMEnum.EPluginName.UNIVERSALTERMINAL] && <NavItem>
                                    <NavLink onClick={() => { this.toggle('4') }}>
                                        Universal Terminal
                                    </NavLink>
                                </NavItem>
                            }
                            {
                                plugins[RWMEnum.EPluginName.LINEDISPLAY] && <NavItem>
                                    <NavLink onClick={() => { this.toggle('5') }}>
                                        Linedisplay
                                    </NavLink>
                                </NavItem>
                            }
                            {
                                plugins[RWMEnum.EPluginName.CASHKEEPER] && <NavItem>
                                    <NavLink onClick={() => { this.toggle('6') }}>
                                        Cash Keeper
                                    </NavLink>
                                </NavItem>
                            }
                            {
                                plugins[RWMEnum.EPluginName.RFIDUPOS] && <NavItem>
                                    <NavLink onClick={() => { this.toggle('7') }}>
                                        Rfid Upos
                                    </NavLink>
                                </NavItem>
                            }
                            {
                                plugins[RWMEnum.EPluginName.CONEXFLOW] && <NavItem>
                                    <NavLink onClick={() => { this.toggle('8') }}>
                                        Conexflow
                                    </NavLink>
                                </NavItem>
                            }

                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            {
                                plugins[RWMEnum.EPluginName.FASTPRINTER] && <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <FastprinterContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                            {
                                plugins[RWMEnum.EPluginName.PRINTER] && <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <PrinterContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                            {
                                plugins[RWMEnum.EPluginName.MSRREADER] && <TabPane tabId="3">
                                    <Row>
                                        <Col sm="12">
                                            <MSRReaderContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                            {
                                plugins[RWMEnum.EPluginName.UNIVERSALTERMINAL] && <TabPane tabId="4">
                                    <Row>
                                        <Col sm="12">
                                            <UniversalTerminalContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                            {
                                plugins[RWMEnum.EPluginName.LINEDISPLAY] && <TabPane tabId="5">
                                    <Row>
                                        <Col sm="12">
                                            <LineDisplayContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                            {
                                plugins[RWMEnum.EPluginName.CASHKEEPER] && <TabPane tabId="6">
                                    <Row>
                                        <Col sm="12">
                                            <CashKeeperContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                            {
                                plugins[RWMEnum.EPluginName.RFIDUPOS] && <TabPane tabId="7">
                                    <Row>
                                        <Col sm="12">
                                            <RfidUposContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                            {
                                plugins[RWMEnum.EPluginName.CONEXFLOW] && <TabPane tabId="8">
                                    <Row>
                                        <Col sm="12">
                                            <ConexflowContainer />
                                        </Col>
                                    </Row>
                                </TabPane>
                            }
                        </TabContent>

                    </AppFieldSet>
                </Container>
            </div>
        )
    }
}

export default App;