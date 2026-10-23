import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddTaskForm({ tasks, setTasks }) {
  const [formInput, setFormInput] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (!formInput.trim()) return;

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, // Safer ID generation in case items are deleted
      title: formInput,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((arr) => [...arr, newTask]);
    setFormInput("");
  };

  return (
    <form
      className="bg-white shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5 rounded-xl border border-slate-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
      onSubmit={addTaskHandler}
    >
      {/* Input container */}
      <div className="border border-slate-300 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 flex-grow px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-3 rounded-lg bg-slate-50/50 transition">
        <FaPlus className="text-slate-400 flex shrink-0" />

        <input
          type="text"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
          className="focus:outline-none w-full bg-transparent text-slate-800 text-sm sm:text-base placeholder:text-slate-400"
          placeholder="Add a new task..."
        />
      </div>

      {/* Add Button */}
      <button 
        type="submit" 
        className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium px-6 py-2.5 sm:py-2 rounded-lg shadow-sm transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>Add</span>
      </button>
    </form>
  );
}

export default AddTaskForm;