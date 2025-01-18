"use client";

import React, { useState } from "react";

const TodoForm = ({ todo = null, onAdd }) => {
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = todo ? "PUT" : "POST";
    const url = todo
      ? `http://localhost:8000/api/todos/${todo.id}/`
      : "http://localhost:8000/api/todos/"; // Fixed missing closing quote

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        onAdd(newTodo); // Notify parent about the new or updated todo
        setTitle("");
        setDescription("");
        alert("Todo saved successfully!");
      } else {
        console.error("Error saving todo");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow-md rounded-md mb-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-black">
        {todo ? "Edit Todo" : "Create Todo"}
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 placeholder:text-gray-400 text-black"
        />
      </div>
      <div className="mb-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 placeholder:text-gray-400 text-black"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        {todo ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default TodoForm;
