import React from 'react'
import {
    ListItem,
    ListItemGraphic,
    ListItemText,
    Checkbox
  } from "mdc-react";

function TodoListItem(todo) {
    const { completed, onCompleteChange, title } = todo

    return <ListItem>
        <ListItemGraphic>
            <Checkbox checked={completed} onChange={onCompleteChange} />
        </ListItemGraphic>
        <ListItemText>{title}</ListItemText>
    </ListItem>
}

export default TodoListItem