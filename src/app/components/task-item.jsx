"use client";
import { useFirebaseContext } from "../context/firebase";

const TaskItem = ({ task }) => {
  console.log("render");
  const {
    setLocalTasks,
    updateLocalUserData,
    setUserDataInStorage,
    currentUser,
    userData,
  } = useFirebaseContext();
  const handleDelete = async (e) => {
    e.preventDefault();

    const newTaskList = userData.tasks.filter((e) => e.id != task.id);
    console.log(newTaskList);
    const newUserData = {
      projects: [...userData.projects],
      tasks: newTaskList,
    };
    await setUserDataInStorage(newUserData, currentUser.uid);
    await updateLocalUserData();
    setLocalTasks(newTaskList);
  };
  return (
    <div className=" p-4 min-h-[60px] mb-3 border-white rounded-md border flex justify-between">
      <div className="flex items-center">
        <span>{task.name}</span>
        <div className=" bg-lime-300 text-black rounded-md text-xs ml-4 ">
          {task.project}
        </div>
      </div>

      <button className=" bg-red-400 rounded-md px-3" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
