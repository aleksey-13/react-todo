import React, { useState, useEffect } from "react";

import { db } from "./firebase";

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";

import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .get()
      .then((snapshot) => {
        const todos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTodos(todos);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
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
