import { connect } from 'react-redux';

import PrinterComponent from "../components/printer"
import { IAppState } from '../interface';
import { RWMInterface, RWMEnum, Printer } from '@wynd/redux-wps-middleware';


export interface IPrinterContainerProps {
    name: string
    started: boolean
    printerRequest: RWMInterface.IPluginStateRequest
    printers: Printer.IPrinter[]
}

const mapStateToProps = (state: IAppState) => {

    const plugin = state.wyndpostools.plugins["printer"] as Printer.IPluginState
    return {
        name: RWMEnum.EPluginName.PRINTER,
        started: plugin ? plugin.isStarted : null,
        printerRequest: plugin ? plugin.request : null,
        printers: plugin && plugin.responses.printers ? plugin.responses.printers : []
    }
}


export default connect(mapStateToProps, null)(PrinterComponent);
