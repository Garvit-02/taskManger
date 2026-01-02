import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./CreateTask.css";

export default function CreateTask() {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // VERY IMPORTANT

    try {
      await API.post("/tasks", { task });
      alert("Task Created Successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error creating task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      <div className="form-group">
        <input
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>

      <div className="form-group">
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>

      <div className="form-group">
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button type="submit">Create Task</button>
    </form>
  );
}
