import { TodoActionsTypes } from "../actionTypes/todo";
import { ITodoState } from "../interface";

const initialState: ITodoState = {
    todos: []
}

const todoReducer = (state: ITodoState = initialState, action: any) => {

    switch (action.type) {
        case TodoActionsTypes.ADD_TODO:
            const newState =  {
                ...state,
                todos: [
                    {
                        text: action.text,
                        completed: false
                    },
                    ...state.todos,

                ]
            }

            return newState;

        default:
            return state
            break;
    }

}

export default todoReducer