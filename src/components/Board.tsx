import { useState, useEffect } from "react";
import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";

type Task = {
  id: string;
  title: string;
  status: "Todo" | "Done";
};

const Board = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("task-manager-dark-mode") === "true";
  });

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    window.localStorage.setItem("task-manager-dark-mode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

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
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 text-slate-900 p-6 
      transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <div className="flex gap-4 justify-between md:items-center
         md:justify-between mb-6">
          <h1 className="text-2xl font-bold">Task Manager</h1>
            <div>
              <label className="switch relative inline-block w-16 h-8 text-lg">
                <span className="sun absolute top-1.5 left-9 z-0 w-6 h-6 animate-rotate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r={5} cy={12} cx={12} /><path d="m21 
                      13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41
                      1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 
                    1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1
                    1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 
                    1 -.71.24z" /></g></svg></span>
                <span className="moon absolute top-1.25 left-1.25 z-0 w-6 h-6 fill-sky-400 animate-tilt"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224
                    223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1
                    89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg></span>   
                    <input type="checkbox" checked={!darkMode} onChange={toggleDarkMode} className="input peer opacity-0 w-0 h-0" />
                <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-sky-400 peer-checked:bg-slate-800 transition-all duration-700 rounded-full focus:shadow-none peer-focus:shadow-[0_0_1px_#183153] before:absolute before:content-[''] before:h-7 before:w-7 before:rounded-full before:left-0.5 before:bottom-0.5 before:z-10 before:bg-gray-200 before:transition-all before:duration-700 peer-checked:before:translate-x-8" />
              </label>
            </div>
  
        </div>

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
    </div>
  );
};
export default Board;