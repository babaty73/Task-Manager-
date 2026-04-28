import TaskCard from "./TaskCard";

type Task = {
  id: string;
  title: string;
};

type TaskColumnProps = {
  title: string;
  tasks: Task[];
  onDropTask: (taskId: string, newStatus: "Todo" | "Done") => void;
  onRemoveTask: (taskId: string) => void;
};

function TaskColumn({ title, tasks, onDropTask, onRemoveTask }: TaskColumnProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const newStatus = title as "Todo" | "Done";
    onDropTask(taskId, newStatus);
  };

  return (
    <div
      className="bg-white rounded-xl shadow p-4 min-h-[300px]"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              onRemove={onRemoveTask}
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No tasks yet.</p>
        )}
      </div>
    </div>
  );
}

export default TaskColumn;
