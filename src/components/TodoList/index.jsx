import React, { useContext, useState, useEffect } from "react";

import DBContext from "../../context/db";

function TodoList(props) {
  const { match } = props;
  const [todos, setTodos] = useState([]);
  const db = useContext(DBContext);

  useEffect(() => {
    db.get('todos').where('listId', '==', match.params.listId)
    setTodos(db.todos)
  }, [])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
