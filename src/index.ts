import store from "./app/store"

import { addTodo } from "./app/actions"
import { emit } from "../redux-wps-middleware/src"
import {fastprinter, universalTerminal, msrreader } from "../redux-wps-middleware/src/wrappers"
import { WPTWrapper } from "../redux-wps-middleware/src/wrappers/wpt";

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
window.UniversalTerminal = universalTerminal
window.MsrReader = msrreader