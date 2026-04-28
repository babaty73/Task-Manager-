import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";

const Board = () => {
  const handleAddTask = (title: string) => {
    console.log("Task Added:", { title });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Task Manager</h1>

      <TaskForm onAddTask={handleAddTask} />

      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        <TaskColumn title="Todo" />
        <TaskColumn title="Doing" />
        <TaskColumn title="Done" />
      </div>
    </div>
  );
};

export default Board;
