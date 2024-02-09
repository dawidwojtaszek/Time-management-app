"use client";
import { useState } from "react";
import { useFirebaseContext } from "../context/firebase";
import { v4 as uuid } from "uuid";
const AddTask = () => {
  const [inputField, setInputField] = useState("");
  const [selectField, setSelectField] = useState("inbox");
  const {
    setUserDataInStorage,
    userData,
    currentUser,
    setLocalTasks,
    localProjects,
    updateLocalUserData,
  } = useFirebaseContext();

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const id = uuid();
      const newUserTask = [...userData.tasks];
      newUserTask.push({
        active: true,
        id: id,
        name: inputField,
        project: selectField,
      });
      const newUserData = {
        projects: [...userData.projects],
        tasks: newUserTask,
      };
      await setUserDataInStorage(newUserData, currentUser.uid);
      await updateLocalUserData();
      setLocalTasks(newUserData.tasks);
      setInputField("");
      document.getElementById("select").selectedIndex = 0;
    } catch {
      console.log("error");
    }
    console.log(userData);
  };
  return (
    <div className="w-full bg-slate-500 rounded-md p-3 mb-4">
      <form onSubmit={addItem} className="flex justify-between">
        <input
          className="w-full rounded-md mr-2 p-3 text-black"
          placeholder="to do"
          type="text"
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
        />
        <select
          className=" mx-3 text-black bg-slate-400 px-3 rounded-md"
          onChange={(e) => setSelectField(e.target.value)}
          id="select"
        >
          <option value="inbox">Inbox</option>
          {localProjects.map((e, index) => (
            <option key={index} value={e}>
              {e}
            </option>
          ))}
        </select>
        <button
          className="w-[130px] py-3 bg-lime-600 text-black rounded-md"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
