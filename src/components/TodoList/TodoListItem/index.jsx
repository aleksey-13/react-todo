import React from 'react'
import {
    ListItem,
    ListItemGraphic,
    ListItemText,
    Checkbox,
    ListItemMeta,
    Icon,
    IconButton,
} from 'mdc-react'

import './style.scss'

function TodoListItem(todo) {
    const { completed, title, onDelete, id, onUpdate, onSelect } = todo
    function handleChange(val) {
        onUpdate(id, { completed: val.target.checked })
    }

    return (
        <ListItem className="todo-list-item">
            <ListItemGraphic>
                <Checkbox checked={completed} onChange={handleChange} />
            </ListItemGraphic>
            <ListItemText onClick={() => onSelect(todo)}>{title}</ListItemText>

            <ListItemMeta>
                <IconButton onClick={() => onDelete(id)}>
                    <Icon>delete</Icon>
                </IconButton>
            </ListItemMeta>
        </ListItem>
    )
}

export default TodoListItem
