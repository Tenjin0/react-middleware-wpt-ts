import store from "./app/store"

import { addTodo } from "./app/actions"
import { emit } from "../redux-wps-middleware/src"
interface IMyWindow extends Window {
    store: typeof store;
    addTodo: typeof addTodo;
    emit: typeof emit;
}
declare var window: IMyWindow;

window.store = store
window.addTodo = addTodo 
window.emit = emit


