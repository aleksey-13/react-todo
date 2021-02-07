import * as api from 'api'

const {
    GET_LISTS,
    GET_TODOS,
    GET_LIST_TODOS,
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO
} = {
    GET_LISTS: 'GET_LISTS',
    GET_TODOS: 'GET_TODOS',
    GET_LIST_TODOS: 'GET_LIST_TODOS',
    CREATE_TODO: 'CREATE_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

export function reducer(state, action) {
    console.log('action', action)
    switch (action.type) {
        case GET_LISTS:
            return { ...state, lists: state.lists.concat(action.payload.lists) }
        case GET_LIST_TODOS:
            return { ...state, todos: state.todos.concat(action.payload.todos) }
        case GET_TODOS:
            return { ...state, todos: state.todos.concat(action.payload.todos) }
        case CREATE_TODO:
            return { ...state, todos: state.todos.concat(action.payload.todo) }
        default:
            return state
    }
}

export const initialState = { lists: [], todos: [] }

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
        .then((todos) =>
            dispatch({ type: GET_LIST_TODOS, payload: { todos, listId } })
        )
}

export function createTodo(data, dispatch) {
    return api
        .createTodo(data)
        .then((todo) => dispatch({ type: CREATE_TODO, payload: { todo } }))
}

export function updateTodo(todoId, data, dispatch) {
    return api
        .updateTodo(todoId, data)
        .then((todo) => dispatch({ type: UPDATE_TODO, payload: { todo } }))
}
// ...todos.map((t) => (t.id !== todoId ? { ...t, ...data } : t))

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
    updateTodo
}
