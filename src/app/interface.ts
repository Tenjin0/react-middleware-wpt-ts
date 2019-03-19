import { RWMInterface } from "@wynd/redux-wps-middleware";

export interface ITODO {
    text: string,
    completed: false
}

export interface ITodoState {
    todos: ITODO[]
}

export interface IAppState {
    wyndpostools: RWMInterface.IWPTState,
    todo : ITodoState
}