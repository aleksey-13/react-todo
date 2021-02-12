import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import {
    Drawer,
    DrawerHeader,
    DrawerContent,
    List,
    ListItem,
    ListItemGraphic,
    ListItemText,
    IconButton,
    Icon,
    ListGroup,
    ListDivider,
} from 'mdc-react'

import DataContext from 'context/data'
import { actions } from 'store'

export default function AppDrawer(props) {
    const { state, actions } = useContext(DataContext)
    const { lists } = props

    const listItems = [
        { icon: 'home', title: 'Задачи', to: '/' },
        { icon: 'star', title: 'Важно', to: '/important' },
        { icon: 'event', title: 'Запланированые', to: '/planned' },
    ]

    const subtitle = (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {state.user ? state.user.email : ''}
            <IconButton onClick={() => actions.setAuth(dispatch)}>
                <Icon>exit_to_app</Icon>
            </IconButton>
        </div>
    )
    return (
        <Drawer id="app-drawer">
            <DrawerHeader title="React Todo" subtitle={subtitle}></DrawerHeader>
            <DrawerContent>
                <ListGroup>
                    <List>
                        {listItems.map((el) => (
                            <ListItem
                                key={el.icon}
                                component={NavLink}
                                to={el.to}
                            >
                                <ListItemGraphic>
                                    <Icon>{el.icon}</Icon>
                                </ListItemGraphic>

                                <ListItemText>{el.title}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                    <ListDivider element="hr" />
                    <List>
                        {lists.map((el) => (
                            <ListItem
                                key={el.id}
                                component={NavLink}
                                to={el.id}
                            >
                                <ListItemGraphic>
                                    <Icon>list</Icon>
                                </ListItemGraphic>

                                <ListItemText>{el.title}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </ListGroup>
            </DrawerContent>
        </Drawer>
    )
}
