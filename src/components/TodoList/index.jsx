import React, { useContext } from "react";

import DBContext from "../../context/db";

function TodoList(props) {
  const { match } = props;
  const db = useContext(DBContext);

  return (
    <ul>
      {db.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
