import {
    GET_LISTS,
    GET_TODOS,
    GET_LIST_TODOS,
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    LOGIN_USER,
    LOGOUT_USER,
} from 'store/types'

export default function reducer(state, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, user: action.payload.user }
        case LOGOUT_USER:
            return { ...state, user: null }
        case GET_LISTS:
            return { ...state, lists: action.payload.lists }
        case GET_LIST_TODOS:
            return { ...state, todos: action.payload.todos }
        case GET_TODOS:
            return { ...state, todos: action.payload.todos }
        case CREATE_TODO:
            return { ...state, todos: state.todos.concat(action.payload.todo) }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.id === action.todoId
                        ? { ...t, ...action.payload.data }
                        : t
                ),
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload.id),
            }
        default:
            return state
    }
}
