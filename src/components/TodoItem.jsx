import React from "react";

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <li style={{ 
      textDecoration: todo.completed ? "line-through" : "none",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "0.5rem"
    }}>
      <span onClick={() => toggleComplete(todo.id)} className={todo.completed ? "completed" : ""} style={{ cursor: "pointer" }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "1rem" }}>
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
