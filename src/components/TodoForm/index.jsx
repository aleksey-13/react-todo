import React, { useState } from 'react'

import { TextField, List, ListItem } from 'mdc-react'

import './style.scss'

function TodoForm({ onSubmit }) {
    const [title, setTitle] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        onSubmit(title)

        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <List>
                <ListItem>
                    <TextField
                        label="What..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </ListItem>
            </List>
        </form>
    )
}

export default TodoForm
