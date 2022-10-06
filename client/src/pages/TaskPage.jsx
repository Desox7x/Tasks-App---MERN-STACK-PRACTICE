import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TaskPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Tasks Manager
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-6">
        <div className="grid grid-cols-4 gap-6 p-6">{renderMain()}</div>
      </div>
    </div>
  );
}

export default TaskPage;
