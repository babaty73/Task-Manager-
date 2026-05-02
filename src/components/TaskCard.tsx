type TaskCardProps = {
  id: string;
  title: string;
  onRemove: (taskId: string) => void;
};

const TaskCard = ({ id, title, onRemove }: TaskCardProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      className="bg-blue-100 dark:bg-slate-700 dark:border-slate-600 border border-transparent p-4 rounded-lg shadow mb-4 hover:bg-blue-200 dark:hover:bg-slate-600 transition cursor-move relative group"
      draggable
      onDragStart={handleDragStart}
    >
      <h3 className="font-semibold text-md text-slate-900 dark:text-slate-100">{title}</h3>
      <button
        onClick={() => onRemove(id)}
        className="absolute top-2 right-2 bg-slate-900 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
        title="Remove task"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default TaskCard;
