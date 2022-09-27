import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NavBar from "./components/NavBar.jsx";
import {TaskContextProvider} from './context/TaskContext'

function App() {
  return (
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
