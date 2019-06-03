
import * as React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from "./app/store"
import { addTodo } from "./app/actions"
import App from "./app/App"
import "./app/app.scss";

import {emit, fastprinter, universalTerminal, msrreader, cashkeeper, cashdrawer, balance,  WPTController, linedisplay, system, rfidupos } from "@wynd/redux-wps-middleware"

interface IMyWindow extends Window {
    store: typeof store;
    addTodo: typeof addTodo;
    emit: typeof emit;
    Fastprinter: WPTController
    UniversalTerminal: WPTController
    MsrReader: WPTController
    Cashkeeper: WPTController
    CashDrawer: WPTController
    LineDisplay: WPTController
    Balance: WPTController
    System: WPTController
    RfidUpos: WPTController
}

declare var window: IMyWindow;

window.store = store
window.addTodo = addTodo 
window.emit = emit

window.Fastprinter = fastprinter
window.UniversalTerminal = universalTerminal
window.MsrReader = msrreader
window.Cashkeeper = cashkeeper
window.CashDrawer = cashdrawer
window.LineDisplay = linedisplay
window.Balance = balance
window.Balance = balance
window.System = system
window.RfidUpos = rfidupos

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)