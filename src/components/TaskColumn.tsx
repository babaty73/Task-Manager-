import TaskCard from "./TaskCard";

type TaskColumnProps = {
  title: string;
};

function TaskColumn({ title }: TaskColumnProps) {
  return (
    
    <div className="bg-white rounded-xl shadow p-4 min-h-[300px]">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="text-gray-400 text-sm"> 
          {/*TaskCard */}
          <TaskCard />
           </div>
        </div>
  )};
export default TaskColumn;
