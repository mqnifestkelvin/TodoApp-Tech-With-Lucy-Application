import TodoForm from "../../Components/TodoForm";

const TodoDetails = async ({ params }) => {
  const { id } = params;

  // Fetch the specific todo using the dynamic ID
  const response = await fetch(`http://localhost:8000/api/todos/${id}/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    // Handle errors gracefully
    return <div className="p-6 text-red-500">Error: Todo not found</div>;
  }

  const todo = await response.json();

  return (
    <div className="w-full h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto p-6 ">
        <h1 className="text-3xl font-bold mb-6 text-black">Todo Details</h1>
        <div className="p-4 bg-white rounded-md shadow mb-6 text-black">
          <div className="flex items-center gap-[0.5rem]">
            <h2 className="text-[1.5rem] font-bold">Todo:</h2>
            <div className="text-[1rem] font-[400] text-center">
              {todo.title}
            </div>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <h2 className="text-[1.5rem] font-bold">Description</h2>
            <p className="text-[1rem] font-[400] text-center">
              {todo.description}
            </p>
          </div>
        </div>
        <TodoForm todo={todo} />
      </div>
    </div>
  );
};

export default TodoDetails;
