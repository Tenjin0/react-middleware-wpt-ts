import store from "./app/store"

import { addTodo } from "./app/actions"
import { emit } from "../redux-wps-middleware/src"
import {FastPrinter, UniversalTerminal } from "../redux-wps-middleware/src/wrappers"

interface IMyWindow extends Window {
    store: typeof store;
    addTodo: typeof addTodo;
    emit: typeof emit;
    Fastprinter: any
    UniversalTerminal: any
}

declare var window: IMyWindow;

window.store = store
window.addTodo = addTodo 
window.emit = emit

window.Fastprinter = {

    printText: (text: string) => {
        return FastPrinter.printText(store.dispatch, text)
    },
    getPrinters: () => {
        return FastPrinter.getPrinters(store.dispatch)
    }
}

window.UniversalTerminal =  {

    input:(amount: number, currency: number, transactionid: string = null, operatorid: string = null) => {
        return UniversalTerminal.input(store.dispatch, {amount, currency, transactionid, operatorid})

    }
}