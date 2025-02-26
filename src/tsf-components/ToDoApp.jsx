import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">To-Do App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 flex-grow"
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2">Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border rounded ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
            <button
              onClick={() => toggleComplete(task.id)}
              className="ml-2 bg-green-500 text-white p-2 rounded"
            >
              {task.completed ? <FaCheck /> : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}