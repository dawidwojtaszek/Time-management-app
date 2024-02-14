"use client";
import ProjectItem from "./project-item";
import AddProject from "./add-project";
import { useFirebaseContext } from "../context/firebase";

const ProjectList = () => {
  const { userData } = useFirebaseContext();
  return (
    <div className="w-[250px] bg-slate-600 flex flex-col p-3">
      <span className=" font-bold uppercase mb-3">Projects list:</span>
      <div className="flex flex-col">
        {userData.projects.map((e, index) => (
          <ProjectItem project={e} key={index} />
        ))}
      </div>
      <AddProject />
    </div>
  );
};

export default ProjectList;
