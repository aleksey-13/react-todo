import React, { useEffect, useReducer, useMemo } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { reducer, initialState, actions } from 'store'
import DataContext from 'context/data'

import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContent'
import TodoListPage from './pages/TodoList'
import LoginPage from './pages/Login'

import './App.scss'

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

    useEffect(() => {
        actions.getLists(dispatch)
        actions.setAuth(dispatch)
    }, [])

    if (!state.user) {
        return !state.user ? <LoginPage /> : <Redirect to="/" />
    }

    return (
        <DataContext.Provider value={contextValue}>
            <div className="app">
                <AppDrawer lists={state.lists} />
                <AppContent>
                    <Switch>
                        <Route exact path="/" component={TodoListPage} />
                        <Route
                            exact
                            path="/important"
                            component={TodoListPage}
                        />
                        <Route exact path="/planned" component={TodoListPage} />

                        <Route
                            path="/:listId/:todoId?"
                            component={TodoListPage}
                        />
                    </Switch>
                </AppContent>
            </div>
        </DataContext.Provider>
    )
}

export default App
