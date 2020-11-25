import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import { getCollection } from './api'

import DBContext from 'context/db'

import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContent'
import TodoList from './components/TodoList'

import './App.scss'

function App() {
  const [lists, setLists] = useState([])

  useEffect(() => {
    getCollection('lists')().then(setLists)
  }, [])

  return (
    <DBContext.Provider value={{ lists, getCollection }}>
      <div className="app">
        <AppDrawer />
        <AppContent>
          <Switch>
            <Route path="/:listId" component={TodoList} />
          </Switch>
        </AppContent>
      </div>
    </DBContext.Provider>
  )
}

export default App
