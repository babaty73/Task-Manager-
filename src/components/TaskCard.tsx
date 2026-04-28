type TaskCardProps = {
  title?: string;
};

const TaskCard = ({ title }: TaskCardProps) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow mb-4 hover:bg-blue-200 transition cursor-pointer">
      <h3 className="font-semibold text-md">{title || "Task Title"}</h3>
    </div>
  );
};

export default TaskCard;
