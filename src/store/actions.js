import * as api from 'api'
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

// Auth
export function loginUser(login, password) {
    return api.loginUser(login, password)
}

export function setAuth(dispatch) {
    api.onAuth((user) => {
        if (user) {
            dispatch({ type: LOGIN_USER, payload: { user } })
        } else {
            dispatch({ type: LOGOUT_USER })
        }
    })
}

export function registerUser(email, password) {
    return api.registerUser(email, password)
}

// DB
export function getLists(dispatch) {
    return api
        .getLists()
        .then((lists) => dispatch({ type: GET_LISTS, payload: { lists } }))
}

export function getTodos(dispatch) {
    return api
        .getTodos()
        .then((todos) => dispatch({ type: GET_TODOS, payload: { todos } }))
}

export function getListTodos(listId, dispatch) {
    return api
        .getListTodos(listId)
        .then((todos) => dispatch({ type: GET_LIST_TODOS, payload: { todos } }))
}

export function createTodo(data, dispatch) {
    return api
        .createTodo(data)
        .then((todo) => dispatch({ type: CREATE_TODO, payload: { todo } }))
}

export function updateTodo(todoId, data, dispatch) {
    return api
        .updateTodo(todoId, data)
        .then((todoId) =>
            dispatch({ type: UPDATE_TODO, payload: { todoId, data } })
        )
}

export function removeTodo(todoId, dispatch) {
    return api
        .removeTodo(todoId)
        .then((id) => dispatch({ type: DELETE_TODO, payload: { id } }))
}

export const actions = {
    getLists,
    getListTodos,
    getTodos,
    createTodo,
    removeTodo,
    updateTodo,
    setAuth,
    loginUser,
}
