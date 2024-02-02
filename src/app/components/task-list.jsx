import TaskItem from "./task-item";
import AddTask from "./add-task";
import { useFirebaseContext } from "../context/firebase";
const TaskList = () => {
  const { userData } = useFirebaseContext();
  const handleRemove = (e) => {
    e.target.parentElement.remove();
  };
  return (
    <div className="flex w-full bg-slate-600 flex-col p-4">
      <AddTask />
      {userData.tasks.map((e, index) => (
        <TaskItem task={e} key={index} />
      ))}
      <ul>
        <li>
          Test task <button onClick={handleRemove}>X</button>
        </li>
        <li>
          Test task2 <button onClick={handleRemove}>X</button>
        </li>
        <li>
          Test task3 <button onClick={handleRemove}>X</button>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
