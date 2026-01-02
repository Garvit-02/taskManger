import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({});

  useEffect(() => {
    API.get(`/tasks/${id}`).then(res => setTask(res.data));
  }, [id]);

  const updateTask = async (e) => {
    e.preventDefault();
    await API.put(`/tasks/${id}`, { task });
    navigate("/");
  };

  return (
    <form onSubmit={updateTask}>
      <h2>Edit Task</h2>

      <input
        value={task.title || ""}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />

      <textarea
        value={task.description || ""}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />

      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button>Update</button>
    </form>
  );
}
