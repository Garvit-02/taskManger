import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
