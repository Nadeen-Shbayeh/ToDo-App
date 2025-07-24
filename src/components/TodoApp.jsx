import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TodoApp;
