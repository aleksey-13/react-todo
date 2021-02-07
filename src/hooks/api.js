import { useEffect, useState, useMemo } from 'react'
import * as api from 'api'

export function useApi() {
    const getLists = () => api.getLists().then(setLists)

    const getTodos = () => api.getTodos().then(setTodos)

    const getListTodos = (listId) => api.getListTodos(listId).then(setTodos)

    const createTodo = (data) =>
        api.createTodo(data).then((todo) => setTodos([...todos, todo]))

    const removeTodo = (todoId) =>
        api
            .removeTodo(todoId)
            .then((id) => setTodos(todos.filter((todo) => todo.id !== id)))

    const updateTodo = (todoId, data) =>
        api
            .updateTodo(todoId, data)
            .then((data) =>
                setTodos([
                    ...todos.map((t) =>
                        t.id !== todoId ? { ...t, ...data } : t
                    )
                ])
            )

    const actions = useMemo(
        () => ({
            getLists,
            getListTodos,
            getTodos,
            createTodo,
            removeTodo,
            updateTodo
        }),
        []
    )

    return {
        data: {
            lists,
            todos
        },
        actions
    }
}
