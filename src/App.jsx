import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { getCollection } from "./api";

import DBContext from "context/db";

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";
import TodoList from "./components/TodoList";

import "./App.scss";

function App() {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getCollection("lists").then(setLists);
    getCollection("todos").then(setTodos);
  }, []);

  return (
    <DBContext.Provider value={{ lists, todos }}>
      <div className="app">
        <AppDrawer lists={lists} />
        <AppContent>
          <Switch>
            <Route path="/:listId" component={TodoList} />
          </Switch>
        </AppContent>
      </div>
    </DBContext.Provider>
  );
}

export default App;
