import { IWPTState } from "../../redux-wps-middleware/src/constants/interface";

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