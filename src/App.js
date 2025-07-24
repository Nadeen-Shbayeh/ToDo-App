import React from "react";
import TodoApp from "./components/TodoApp";
import './App.css';


function App() {
  return (
    <div className="app-container">
      <h1>📝 To-Do List</h1>
      <TodoApp />
    </div>
  );
}

export default App;
