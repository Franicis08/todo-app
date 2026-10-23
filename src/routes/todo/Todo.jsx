import AddTaskForm from "../../components/AddTaskForm";
import Task from "../../components/Task";

function Todo({ tasks, setTasks }) {
  return (
    <>
      <section className="p-5 md:px-20 bg-gray-300 w-screen min-h-[calc(100vh-10rem)]">
        <div className="h-full flex flex-col gap-5">
          <AddTaskForm tasks={tasks} setTasks={setTasks} />

          <div className="min-h-full flex flex-col gap-5">
            {tasks.length == 0 ? (
              <p className="mt-[15%] mx-auto">
                All clear! Time to relax or add your first task.
              </p>
            ) : (
              tasks.map((task, index) => (
                <Task key={index} task={task} setTasks={setTasks} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Todo;
