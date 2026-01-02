import API from "../api";
import { Link } from "react-router-dom";

export default function TaskCard({ task, refresh }) {
  const deleteTask = async () => {
    await API.delete(`/tasks/${task._id}`);
    refresh();
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>

      <Link to={`/edit/${task._id}`}>Edit</Link>
      <button onClick={deleteTask} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}
