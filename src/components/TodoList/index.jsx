import React, { useContext, useState, useEffect } from "react";
import {
  List,
  Typography
} from "mdc-react";
 
import TodoListItem from './TodoListItem'

import DBContext from "../../context/db";

import './style.scss'

function TodoList(props) {
  const { match } = props;
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const db = useContext(DBContext);

  useEffect(() => {
    db.getCollection('todos')(collection => collection.where('listId', '==', match.params.listId)).then(setTodos) 

    db.lists.map(list => list.id === match.params.listId ? setTitle(list.title) : '')

    return () => {
      setTodos([])
    }
  }, [db, match.params.listId])

  if (todos.length === 0) {
    return <div className="todo-list"><Typography variant="headline4" noMargin>Загрузка...</Typography></div>
  }

  return (
    <div className="todo-list">
      <Typography className="todo-list__title" variant="headline4" noMargin>{title}</Typography>
      <List className="todo-list__items">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
