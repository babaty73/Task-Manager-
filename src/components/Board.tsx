import TaskColumn from "./TaskColumn";

const Board = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className=" flex text-4xl text-blue-600 text-bold font-bold mb-6 justify-center">Task Manager</h1>

      <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
        <TaskColumn title="Todo" />
        <TaskColumn title="Doing" />
        <TaskColumn title="Done" />
      </div>
    </div>
  );
};

export default Board;
