"use client";
import { useAuthContext } from "../context/auth";
import Link from "next/link";
const Header = () => {
  const { logOut, currentUser } = useAuthContext();
  console.log(currentUser);
  return (
    <header className="w-full bg-slate-900 text-white flex justify-center h-28">
      <div className=" px-3 items-center w-[1200px] h-full flex justify-between">
        <h1 className="font-bold text-3xl">Time management app</h1>
        <nav>
          <ul className="flex justify-between">
            <li>
              <Link href="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link href="/sign-up" className=" mx-5">
                Sign up
              </Link>
            </li>
            <li>
              <button className=" bg-red-500 text-white px-5" onClick={logOut}>
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
