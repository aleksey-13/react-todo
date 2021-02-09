import React, { useEffect, useState, useContext } from 'react'

import { Layout } from 'mdc-react'

import { actions } from 'store'
import DataContext from 'context/data'

import TodoList from 'components/TodoList'
import TodoForm from 'components/TodoForm'
import TodoDetails from 'components/TodoDetails'

import './style.scss'

function TodoListPage(props) {
    const { match } = props
    const { state, dispatch } = useContext(DataContext)
    const [selectedTodo, setSelectedTodo] = useState(null)

    useEffect(() => {
        if (match.params.listId) {
            actions.getListTodos(match.params.listId, dispatch)
        } else {
            actions.getTodos(dispatch)
        }
        return () => setSelectedTodo(null)
    }, [dispatch, match.params.listId])

    const list = state.lists.find((list) => list.id === match.params.listId)

    const handleSubmit = (title) =>
        actions.createTodo({ title, listId: list.id }, dispatch)

    const handleDelete = (todoId) => actions.removeTodo(todoId, dispatch)

    const handleUpdate = (todoId, data) =>
        actions.updateTodo(todoId, data, dispatch)

    const handleSelect = (todo) => setSelectedTodo(todo)

    return (
        <Layout id="todo-list-page" className="page" row>
            <Layout>
                <TodoList
                    todos={state.todos}
                    list={list}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                    onSelect={handleSelect}
                />

                <TodoForm onSubmit={handleSubmit} />
            </Layout>

            {selectedTodo && (
                <TodoDetails
                    todo={selectedTodo}
                    onClose={() => setSelectedTodo(null)}
                />
            )}
        </Layout>
    )
}

export default TodoListPage
