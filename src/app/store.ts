import { applyMiddleware, compose, createStore} from 'redux'
import * as io from 'socket.io-client';
import { createWpsMiddleware } from "../../redux-wps-middleware/src"

import reducer from "./reducers"

interface IMyWindow extends Window {
	process: any;
	__REDUX_DEVTOOLS_EXTENSION__(): any;
}

declare var window: IMyWindow;

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

const socket = io('https://localhost:9963', {
    "reconnectionAttempts": 4,
	"rejectUnauthorized": false
})

const wpsMiddleware = createWpsMiddleware(socket);


const middleware: any[] = [ wpsMiddleware ]
const enhancers = []

if (typeof devToolsExtension === 'function') {
	enhancers.push(devToolsExtension())
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)


// other import


const store = createStore(
	reducer,
	composedEnhancers
)
export default store