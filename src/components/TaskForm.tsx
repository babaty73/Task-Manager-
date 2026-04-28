import { useState } from "react";

type TaskFormProps = {
  onAddTask?: (title: string) => void;
};

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    // For now, just log the task
    console.log("New Task:", { title });

    // Call parent function if provided
    if (onAddTask) onAddTask(title);

    // Reset form
    setTitle("");

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">Add New Task</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
