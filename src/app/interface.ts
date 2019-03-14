import { RWMInterface } from "@wynd/redux-wps-middleware";
import { Map } from "immutable"
export interface ITODO {
    text: string,
    completed: false
}


export interface ITodoState {
    todos: ITODO[]
}

export interface IAppState {
    wyndpostools: Map<any, any>,
    todo : ITodoState
}