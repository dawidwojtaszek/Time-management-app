"use client";
import { useState } from "react";
import { useFirebaseContext } from "../context/firebase";
const AddTask = () => {
  const [inputField, setInputField] = useState("");
  const { setUserDataInStorage, userData, currentUser } = useFirebaseContext();

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const newUserTask = [...userData.tasks];
      newUserTask.push({
        active: true,
        id: "test",
        name: inputField,
        project: "inbox",
      });
      const newUserData = {
        projects: [...userData.projects],
        tasks: newUserTask,
      };
      await setUserDataInStorage(newUserData, currentUser.uid);
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
