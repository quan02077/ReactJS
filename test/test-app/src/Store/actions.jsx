import { SET_TODO_INPUT, SET_TODOS, DELETE_TODO, EDIT_INDEX, UPDATE_TODO } from "./constants";

export const setToDo = payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export const setToDos = payload => {
    return {
        type: SET_TODOS,
        payload
    }
}

export const deleteToDo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const setEditIndex = payload => {
    return {
        type: EDIT_INDEX,
        payload
    }
}

export const updateToDo = payload => {
    return {
        type: UPDATE_TODO,
        payload
    }
}