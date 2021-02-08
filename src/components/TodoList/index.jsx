import React from 'react'
import { List, Typography } from 'mdc-react'

import TodoListItem from './TodoListItem'

import './style.scss'

function TodoList(props) {
    const { todos, list, onDelete, onUpdate, onSelect } = props

    if (todos.length === 0 || list === undefined) {
        return (
            <div className="todo-list">
                <Typography variant="headline4" noMargin>
                    Загрузка...
                </Typography>
            </div>
        )
    }

    return (
        <div className="todo-list">
            <Typography
                className="todo-list__title"
                variant="headline4"
                noMargin
            >
                {list.title}
            </Typography>

            <List className="todo-list__items">
                {todos.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        {...todo}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        onSelect={onSelect}
                    />
                ))}
            </List>
        </div>
    )
}

export default TodoList
