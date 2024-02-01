import ProjectList from "./projects-list";
import TaskList from "./task-list";
import { useEffect } from "react";
import { useFirebaseContext } from "../context/firebase";
import { useRouter } from "next/navigation";
const DashboardContainer = () => {
  const { currentUser, userData } = useFirebaseContext();
  const testUserData = { ...userData };
  const testDataChange = { name: "test" };
  const router = useRouter();
  const handleChange = (e) => {
    e.preventDefault();
    localStorage.setItem("test", JSON.stringify(testDataChange));
  };
  useEffect(() => {
    console.log("dashboard render");
    localStorage.setItem("test", JSON.stringify(testUserData));

    return () => {
      console.log("dashboard odmontowany");
      // localStorage.setItem("test", JSON.stringify(testUserData));
    };
  }, [router.pathname]);
  return currentUser != null ? (
    <div className="w-full flex justify-between flex-initial gap-4 ">
      <button onClick={handleChange}>change</button>
      <ProjectList />
      <TaskList />
    </div>
  ) : (
    "you need to login"
  );
};

export default DashboardContainer;
