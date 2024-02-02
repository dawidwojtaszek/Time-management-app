import ProjectList from "./projects-list";
import TaskList from "./task-list";
import { useFirebaseContext } from "../context/firebase";

const DashboardContainer = () => {
  const { currentUser } = useFirebaseContext();

  return currentUser != null ? (
    <div className="w-full flex justify-between flex-initial gap-4 ">
      <ProjectList />
      <TaskList />
    </div>
  ) : (
    "you need to login"
  );
};

export default DashboardContainer;
