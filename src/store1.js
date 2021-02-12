import * as api from 'api'

const {
    GET_LISTS,
    GET_TODOS,
    GET_LIST_TODOS,
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    LOGIN_USER,
    LOGOUT_USER,
} = {
    GET_LISTS: 'GET_LISTS',
    GET_TODOS: 'GET_TODOS',
    GET_LIST_TODOS: 'GET_LIST_TODOS',
    CREATE_TODO: 'CREATE_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
}

export function reducer(state, action) {
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

export const initialState = { lists: [], todos: [], user: null }

export function loginUser(login, password) {
    return api.loginUser(login, password)
}

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

export function setAuth(dispatch) {
    api.onAuth((user) => {
        if (user) {
            dispatch({ type: LOGIN_USER, payload: { user } })
        } else {
            dispatch({ type: LOGOUT_USER })
        }
    })
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
