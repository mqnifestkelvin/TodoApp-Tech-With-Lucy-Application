"use client";

import { useEffect } from "react";
import Link from "next/link";

const TodoList = ({ todos, fetchTodos }) => {
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this Todo?");
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:8000/api/todos/${id}/`, {
          method: "DELETE",
        });

        if (response.ok) {
          fetchTodos(); // Refresh the list after deletion
        } else {
          console.error("Failed to delete the Todo");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow hover:bg-gray-200"
          >
            <span className="text-lg font-medium text-black">{todo.title}</span>
            <div className="space-x-2">
              <Link
                href={`/todos/${todo.id}`}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View
              </Link>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
