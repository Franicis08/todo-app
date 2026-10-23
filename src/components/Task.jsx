import { useState } from "react";
import { FaCalendar, FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Task({ task, setTasks }) {
    const [onEdit, setOnEdit] = useState(false);
    const [formInput, setFormInput] = useState("");

    // Edit task Handler
    const editTaskHandler = (e) => {
      e.preventDefault();
      if (!formInput) return;

      setTasks((tasks) => 
        tasks.map((tas) =>
          tas.id == task.id ? { ...tas, title: formInput } : tas
        )
      );
      setFormInput("");
      setOnEdit(false);
    };

    const deleteTaskHandler = () => {
      setTasks((tasks) => {
        let prevTasks = [...tasks];
        let taskIndex = prevTasks.findIndex((tas) => tas.id == task.id);
        if (taskIndex !== -1) prevTasks.splice(taskIndex, 1);
        return prevTasks;
      });
    };
    
    const taskComplitionHandler = () => {
      setTasks((tasks) =>
        tasks.map((tas) => 
          tas.id == task.id ? { ...tas, completed: true } : tas
        )
      );
    };

  return (
    <div className={`${task.completed ? "bg-gray-100" : "bg-white"} shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
      
      {/* Left Section: Checkbox, Title/Form, Date */}
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto ">
        {task.completed ? (
          <input type="radio" defaultChecked className="scale-125 mt-1 sm:mt-0 accent-emerald-600 cursor-pointer" />
        ) : (
          <input type="radio" className="scale-125 mt-1 sm:mt-0 accent-emerald-600 cursor-pointer" onChange={() => taskComplitionHandler()} />
        )}

        <div className="w-full">
          {/* OnEdit true display form, else display title */}
          {onEdit ? (
            <form onSubmit={editTaskHandler} className="w-full">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input 
                  type="text"
                  className="focus:outline-emerald-500 w-full border border-slate-300 px-3 py-1.5 rounded-lg text-sm"
                  onChange={(e) => setFormInput(e.target.value)}
                  placeholder={task.title}
                  autoFocus
                />
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition">
                  Save
                </button>
              </div>
            </form>
          ) : (
            <h3 className={`font-medium text-slate-800  ${task.completed ? "line-through text-slate-400" : ""}`}>
              {task.title}
            </h3>
          )}

          <p className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mt-1">
            <FaCalendar className="text-slate-400" /> {task.createdAt.toLocaleString().slice(0, 10)}
          </p>
        </div>
      </div>

      {/* Right Section: Status Badge & Action Buttons */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
        <span className={`${task.completed ? "text-emerald-900 bg-emerald-100" : "text-amber-900 bg-amber-100"} capitalize py-1 px-3 rounded-full text-xs font-semibold tracking-wide`}>
          {task.completed ? "completed" : "pending"}
        </span>

        <div className="flex items-center gap-4">
          <button 
            className="p-1.5 hover:bg-slate-100 rounded-lg transition active:scale-95" 
            onClick={() => !task.completed && setOnEdit((i) => !i)}
            title="Edit Task"
          >
            {onEdit ? ( 
              <IoMdClose className="text-red-600 text-xl" />
            ) : (
              <FaPencilAlt className="text-blue-600 text-sm" />
            )}
          </button>

          <button 
            className="p-1.5 hover:bg-red-50 rounded-lg transition active:scale-95"
            onClick={deleteTaskHandler}
            title="Delete Task"
          >
            <FaTrash className="text-red-600 text-sm" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default Task;