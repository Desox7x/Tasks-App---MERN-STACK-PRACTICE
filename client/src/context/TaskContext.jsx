import { useContext, useState } from "react";
import { createContext } from "react";
import { getTaskRequest, deleteTaskRequest, createTaskRequest } from "../api/task.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTaskRequest();
    setTasks(response.data);
  }

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter(task => task.id !== id))
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
