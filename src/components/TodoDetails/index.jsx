import React from 'react'
import {
    Typography,
    Layout,
    Icon,
    IconButton,
    TextField,
    Checkbox,
    List,
    ListItem,
    ListItemText
} from 'mdc-react'

import './style.scss'

function TodoDetails({ todo, onClose }) {
    return (
        <aside className="todo-details">
            <Layout
                className="todo-details__header"
                row
                justifyContent="between"
            >
                <Typography>Детали и задачи</Typography>

                <IconButton onClick={onClose}>
                    <Icon>close</Icon>
                </IconButton>
            </Layout>

            <Layout>
                <Layout row>
                    <Checkbox checked={todo.completed} onChange={() => {}} />
                    <TextField
                        value={todo.title}
                        onChange={() => {}}
                        fullWidth
                    />
                </Layout>

                <List>
                    {todo.steps &&
                        todo.steps > 0 &&
                        todo.steps.map((step, idx) => (
                            <ListItem key={idx}>
                                <ListItemText>{step}</ListItemText>
                            </ListItem>
                        ))}
                </List>
            </Layout>
        </aside>
    )
}

export default TodoDetails
