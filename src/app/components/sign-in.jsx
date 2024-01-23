"use client";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
      console.log(cred);
    });
  };
  return (
    <div className="w-full h-[100px] bg-zinc-700 flex justify-center items-center p-3">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className=" mx-3 p-3 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          className="mx-3 p-3 rounded-md"
        />
        <button className="mx-3 p-3 bg-lime-600 rounded-md">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
