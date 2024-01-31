import TaskItem from "./task-item";
import { useFirebaseContext } from "../context/firebase";
const TaskList = () => {
  const { userData } = useFirebaseContext();

  return (
    <div className="flex w-full bg-slate-600">
      {userData.tasks.map((e, index) => (
        <TaskItem task={e} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
