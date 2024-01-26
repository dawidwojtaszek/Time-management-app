"use client";
import Nav from "../components/nav";
import UserNav from "./user-nav";
import { useAuthContext } from "../context/auth";
const Header = () => {
  const { currentUser, logOut } = useAuthContext();
  return (
    <header className="w-full bg-slate-900 text-white flex justify-center h-28">
      <div className=" px-3 items-center w-[1200px] h-full flex justify-between">
        <h1 className="font-bold text-3xl">Time management app</h1>
        <nav>
          {currentUser != null ? (
            <UserNav user={currentUser} logOut={logOut} />
          ) : (
            <Nav />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
