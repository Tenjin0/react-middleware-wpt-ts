import * as React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from "./app/store"
import { addTodo } from "./app/actions"
import App from "./app/App"
import "./app/app.scss";

import { emit, fastprinter, universalTerminal, msrreader,
    logs, configuration,
     cashkeeper, cashdrawer, balance,  WPTController, linedisplay, system, rfidUpos } from "@wynd/redux-wps-middleware"

interface IMyWindow extends Window {
    store: typeof store;
    addTodo: typeof addTodo;
    emit: typeof emit;
    Balance: WPTController
    Configuration: WPTController
    Fastprinter: WPTController
    UniversalTerminal: WPTController
    MsrReader: WPTController
    Cashkeeper: WPTController
    CashDrawer: WPTController
    LineDisplay: WPTController
    Logs: WPTController
    System: WPTController
    RfidUpos: WPTController
}

declare var window: IMyWindow;

window.store = store
window.addTodo = addTodo 
window.emit = emit

window.Balance = balance
window.Configuration = configuration
window.Fastprinter = fastprinter
window.UniversalTerminal = universalTerminal
window.MsrReader = msrreader
window.Cashkeeper = cashkeeper
window.CashDrawer = cashdrawer
window.LineDisplay = linedisplay
window.Logs = logs
window.System = system
// window.RfidUpos = rfidUpos

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)