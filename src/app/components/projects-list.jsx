"use client";
import ProjectItem from "./project-item";
import { useFirebaseContext } from "../context/firebase";

const ProjectList = () => {
  const { userData } = useFirebaseContext();
  return (
    <div className="w-[250px] bg-slate-600 flex flex-col">
      Projects list:
      {userData.projects.map((e, index) => (
        <ProjectItem project={e} key={index} />
      ))}
    </div>
  );
};

export default ProjectList;
