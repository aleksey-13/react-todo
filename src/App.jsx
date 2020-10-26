import React, { useState, useEffect } from "react";

import { getCollection } from './api'

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";

import "./App.scss";

function App() {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getCollection('lists').then(setLists)
    getCollection('todos').then(setTodos)
  }, []);

  return (
    <div className="app">
      <AppDrawer />
      <AppContent>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </AppContent>
    </div>
  );
}

export default App;
