"use client";

import { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos on initial load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/api/todos/", {
      cache: "no-store",
    });
    const data = await response.json();
    setTodos(data);
  };

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Todo App
        </h1>
        {/* Pass fetchTodos to refresh the list */}
        <TodoForm onAdd={handleAddTodo} />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  );
};

export default Home;
