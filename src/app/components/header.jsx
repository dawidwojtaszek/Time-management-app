"use client";
import Nav from "../components/nav";
import UserNav from "./user-nav";
import { useRouter } from "next/navigation";
import { useFirebaseContext } from "../context/firebase";
import Link from "next/link";
const Header = () => {
  const { currentUser, logOut } = useFirebaseContext();
  const router = useRouter();
  return (
    <header className="w-full bg-slate-900 text-white flex justify-center h-28">
      <div className=" px-3 items-center w-[1200px] h-full flex justify-between">
        <Link href={currentUser != null ? "/dashboard" : "/"}>
          <span className="font-bold text-3xl">Time management app</span>
        </Link>
        <nav>
          {currentUser != null ? (
            <UserNav
              user={currentUser}
              logOut={() => {
                logOut();
                router.push("/");
              }}
            />
          ) : (
            <Nav />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
