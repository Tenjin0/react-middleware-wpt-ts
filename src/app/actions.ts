import {Dispatch} from "redux"
import { TodoActionsTypes } from "./actionTypes/todo"

import { fastprinter } from "@wynd/redux-wps-middleware"

export const addTodo = (text: string) => {
    return {
        type: TodoActionsTypes.ADD_TODO,
        text: text
    }
}

export function googleFetchThenPrint() : (Dispatch: Dispatch) => void{
    return (dispatch: Dispatch) => {

        let headers = new Headers();

        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Origin','https://localhost:3000');
        headers.append('Access-Control-Allow-Methods','OPTIONS, GET, HEAD, POST');
        headers.append('Access-Control-Allow-Headers','x-requested-with, Content-Type, origin, authorization, accept, client-security-token');

        fetch("https://www.google.com", {
            mode:"cors",
            method: 'GET',
            headers: headers
        })
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.statusText);
            }
           
            return response
        })
        .then((response) => response.json())
        .then((items) => {
            console.log(items)
            fastprinter.printText("page de google")
        })

        .catch(() => fastprinter.printText("erreur sur google"))
    }
   
}