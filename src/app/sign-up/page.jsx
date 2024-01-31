"use client";
import { useState } from "react";
import { useFirebaseContext } from "../context/firebase";
import { useRouter } from "next/navigation";

import ShowMessage from "../components/showMessage";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const router = useRouter();
  const { signUp, createUser } = useFirebaseContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signUp(email, password);
      await createUser(
        {
          projects: ["test"],
          tesks: [
            {
              active: true,
              id: "asdfee",
              name: "melo",
              project: "personal",
            },
          ],
        },
        userCredential.user.uid
      );

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.push("/");
      setMessage({ message: "Success", error: false });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <div className=" flex flex-col bg-slate-300 text-black w-[350px] h-min-[350px] rounded-lg p-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <span className="font-bold text-5xl mb-5">Sign Up</span>
          {message != null ? (
            <ShowMessage message={message.message} error={message.error} />
          ) : (
            ""
          )}

          <label className="text-slate-800">
            email:
            <input
              className="p-3 rounded-md mb-2"
              type="email"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className=" text-slate-800 ">
            password:
            <input
              type="password"
              className="p-3 rounded-md mb-2"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label className=" text-slate-800 ">
            confirm password:
            <input
              type="password"
              className="p-3 rounded-md mb-2"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </label>

          <button
            className="w-full py-4 bg-lime-600 rounded-md mt-2"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
