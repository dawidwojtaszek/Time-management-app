"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFirebaseContext } from "../context/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useFirebaseContext();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((cred) => console.log(cred))
      .then(setEmail(""))
      .then(setPassword(""))
      .then(router.push("/dashboard"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center mt-12">
      <div className=" flex flex-col bg-slate-300 text-black w-[350px] h-min-[350px] rounded-lg p-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <span className="font-bold text-5xl mb-5">Sign In</span>
          <label className="text-slate-800">
            email:
            <input
              className="p-3 rounded-md mb-2"
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className=" text-slate-800 ">
            password:
            <input
              type="password"
              className="p-3 rounded-md mb-2"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="w-full py-4 bg-lime-600 rounded-md mt-2"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
