
import * as React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from "./app/store"
import { addTodo } from "./app/actions"
import App from "./app/App"
import "./app/app.scss";

import {emit, fastprinter, universalTerminal, msrreader, cashkeeper, WPTController } from "@wynd/redux-wps-middleware"

interface IMyWindow extends Window {
    store: typeof store;
    addTodo: typeof addTodo;
    emit: typeof emit;
    Fastprinter: WPTController
    UniversalTerminal: WPTController
    MsrReader: WPTController
    Cashkeeper: WPTController
}

declare var window: IMyWindow;

window.store = store
window.addTodo = addTodo 
window.emit = emit

window.Fastprinter = fastprinter
window.UniversalTerminal = universalTerminal
window.MsrReader = msrreader
window.Cashkeeper = cashkeeper

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)