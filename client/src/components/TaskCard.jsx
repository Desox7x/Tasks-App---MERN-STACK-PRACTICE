
import { useTasks } from "../context/TaskContext";
import {Navigate, useNavigate} from 'react-router-dom';

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const Navigate = useNavigate();

  

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "Done" : "In progress"}</span>
      <span>{task.createAt}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => Navigate(`/edit/${task.id}`)}>Edit</button>
    </div>
  );
}

export default TaskCard;
