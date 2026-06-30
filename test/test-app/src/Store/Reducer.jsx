import { DELETE_TODO, SET_TODO_INPUT, SET_TODOS, EDIT_INDEX, UPDATE_TODO } from "./constants"

const initialState = {
    toDoInput: '',
    toDos: [],
    editIndex: null
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                toDoInput: action.payload
            }
        case SET_TODOS:
            return {
                ...state,
                toDos: [...state.toDos, action.payload]
            }
        case DELETE_TODO:
            {
                const newToDos = [...state.toDos]
                newToDos.splice(action.payload, 1)
                return {
                    ...state,
                    toDos: newToDos
                }
            }
        case EDIT_INDEX:
            return {
                ...state,
                editIndex: action.payload
            }
        case UPDATE_TODO:
            {
                const newToDo = [...state.toDos]
                newToDo[state.editIndex] = action.payload
                return {
                    ...state,
                    toDoInput: '',
                    toDos: newToDo,
                    editIndex: null
                }
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initialState }
export default reducer