import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import useStore from 'hooks/store'

import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContent'
import TodoListPage from './pages/TodoList'
import LoginPage from './pages/Login'

import './App.scss'

function App() {
    const { state, actions } = useStore()

    useEffect(() => {
        actions.getLists()
        actions.setAuth()
    }, [])

    if (!state.user) {
        return !state.user ? <LoginPage /> : <Redirect to="/" />
    }

    return (
        <div className="app">
            <AppDrawer lists={state.lists} />
            <AppContent>
                <Switch>
                    <Route exact path="/" component={TodoListPage} />
                    <Route exact path="/important" component={TodoListPage} />
                    <Route exact path="/planned" component={TodoListPage} />

                    <Route path="/:listId/:todoId?" component={TodoListPage} />
                </Switch>
            </AppContent>
        </div>
    )
}

export default App
