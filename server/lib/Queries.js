import { pool } from "../db.js";


//Get all tasks from the pool
export const getAllTasks = async (req, res) => {
  let data = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
  console.log(data);
  return data;
};

//Create a new task
export const createTaskQuery = async (title, description) => { 
  let data = await pool.query("INSERT INTO tasks(title, description) VALUES (?,?)", [title, description]);
  console.log(data);
  return data;
}

//Get a task
export const getTaskQuery = async (req, res) => {
  let data = await pool.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  console.log(data);
  return data;
};

//Update task
export const updateTaskQuery = async (req, res) => {
  let data = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  console.log(data);
  return data;
};

//Delete a task from the pool
export const deleteTaskQuery = async (req, res) => {
  let data = await pool.query("DELETE FROM tasks WHERE id =?", [
    req.params.id,
  ]);
  console.log(data);
  return data;
};
