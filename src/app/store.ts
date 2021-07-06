import { applyMiddleware, compose, createStore, Store } from 'redux'
import * as io from 'socket.io-client';

import { createWpsMiddleware, RWMEnum } from "@wynd/redux-wps-middleware"

import reducer from "./reducers"
interface IMyWindow extends Window {
	process: any;
	__REDUX_DEVTOOLS_EXTENSION__(): any;
}

declare var window: IMyWindow;

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
const ip = 'http://localhost:9963'
const socket = io(ip, {
	"reconnectionAttempts": 4,
	"rejectUnauthorized": false
})

const wpsMiddleware = createWpsMiddleware(ip);

const middlewares: any[] = [wpsMiddleware]

const enhancers = []

if (typeof devToolsExtension === 'function') {
	enhancers.push(devToolsExtension())
}

const composedEnhancers = compose(
	applyMiddleware(...middlewares),
	...enhancers
)

// other import


const store: Store = createStore(
	reducer,
	composedEnhancers
)
export default store

