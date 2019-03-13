
import * as React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from "./app/store"

import { addTodo } from "./app/actions"
import App from "./app/App"

import "./app/app.scss";

import middleware from "@wynd/redux-wps-middleware"
console.log(middleware)

import {emit, fastprinter, universalTerminal, msrreader, WPTWrapper } from "@wynd/redux-wps-middleware"


interface IMyWindow extends Window {
    store: typeof store;
    addTodo: typeof addTodo;
    emit: typeof emit;
    Fastprinter: WPTWrapper
    UniversalTerminal: WPTWrapper
    MsrReader: WPTWrapper
}

declare var window: IMyWindow;

window.store = store
window.addTodo = addTodo 
window.emit = emit

window.Fastprinter = fastprinter
window.UniversalTerminal = universalTerminal
window.MsrReader = msrreader

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)