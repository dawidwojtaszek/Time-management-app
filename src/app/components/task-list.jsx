import TaskItem from "./task-item";
import AddTask from "./add-task";
import { useFirebaseContext } from "../context/firebase";
const TaskList = () => {
  const { localTasks } = useFirebaseContext();

  return (
    <div className="flex w-full bg-slate-600 flex-col p-4">
      <AddTask />
      {localTasks.map((e, index) => (
        <TaskItem task={e} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
