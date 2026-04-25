type TaskColumnProps = {
  title: string;
};

const TaskColumn = ({ title }: TaskColumnProps) => {
  return (
    <div className = "bg-gray-600 rounded-xl shadow p-4 min-h-[300px]">
      <h2 className="flex justify-center text-lg font-bold mb-6">{title}</h2>

      {/* Tasks will go here later */}
      <div className="text-gray-400 text-sm">
        No tasks yet...
      </div>
    </div>
  );
};

export default TaskColumn;
