import { useTasks } from "../context/TaskContext";
import { Navigate, useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const Navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="transition bg-slate-100 rounded-md p-4 shadow-md shadow-blue-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-50 duration-300">
      <header className="flex justify-between ">
        <h2 className="text-lg text-blue-400 font-bold font-serif">
          {task.title}
        </h2>
        <h4>{task.done == 1 ? "✅" : "❌"}</h4>
      </header>
      <hr />
      <p className="text-sm pt-2">{task.description}</p>

      <div className="flex gap-x-1 justify-end">
        <button
          className="px-2 py-1 text-white hover:bg-gray-300 rounded-full"
          onClick={() => deleteTask(task.id)}
        >
          ❌
        </button>
        <button
          className="px-2 py-1 font-bold hover:bg-gray-300 rounded-full"
          onClick={() => Navigate(`/edit/${task.id}`)}
        >
          🖉
        </button>
        <button
          className=" px-2 py-1 font-bold hover:bg-gray-300 rounded-full"
          onClick={() => handleDone(task.done)}
        >
          ✓
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
