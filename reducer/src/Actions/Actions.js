export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

 export function addTodo(task) {
    return {
        type: ADD_TODO,
        payload: task
    }
 }