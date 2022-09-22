
export const getTasks = (req, res)  => {
  res.send("obtener tasks");
}

export const getTask = (req, res)  => {
  res.send("obtener task");
}

export const updateTask = (req, res)  => {
  res.send("actualizar task");
}

export const createTask = (req, res)  => {
  console.log(req.body);
  res.send("crear task");
}

export const deleteTask = (req, res)  => {
  res.send("borrando task");
}