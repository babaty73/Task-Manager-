import { useState } from "react";
import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";

type Task = {
  id: string;
  title: string;
  status: "Todo" | "Done";
};

const Board = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now().toString(),
        title,
        status: "Todo",
      },
    ]);
  };

  const handleRemoveTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleDropTask = (taskId: string, newStatus: "Todo" | "Done") => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Task Manager</h1>

      <TaskForm onAddTask={handleAddTask} />

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <TaskColumn
          title="Todo"
          tasks={tasks.filter((task) => task.status === "Todo")}
          onDropTask={handleDropTask}
          onRemoveTask={handleRemoveTask}
        />
        <TaskColumn
          title="Done"
          tasks={tasks.filter((task) => task.status === "Done")}
          onDropTask={handleDropTask}
          onRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
};

export default Board;
