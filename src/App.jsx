import React, { useEffect, useReducer } from 'react'
import { Switch, Route } from 'react-router-dom'

import { reducer, initialState, actions } from 'store'
import DataContext from 'context/data'

import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContent'
import TodoListPage from './pages/TodoListPage'

import './App.scss'

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        actions.getLists(dispatch)
    }, [])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            <div className="app">
                <AppDrawer lists={state.lists} />
                <AppContent>
                    <Switch>
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
