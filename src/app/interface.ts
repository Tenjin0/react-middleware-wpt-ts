import { IWPTState } from "@wynd/redux-wps-middleware";

export interface ITODO {
    text: string,
    completed: false
}


export interface ITodoState {
    todos: ITODO[]
}

export interface IAppState {
    wyndpostools: IWPTState,
    todo : ITodoState
}