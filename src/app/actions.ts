import { TodoActionsTypes } from "./actionTypes/todo"

export const addTodo = (text: string) => {
    return {
        type: TodoActionsTypes.ADD_TODO,
        text: text
    }
}
