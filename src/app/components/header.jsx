import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full bg-slate-900 text-white flex justify-center h-28">
      <div className=" px-3 items-center w-[1200px] h-full flex justify-between">
        <h1 className="font-bold text-3xl">Time management app</h1>
        <nav>
          <ul>
            <li>
              <Link href="/sign-in" className=" ml-5">
                Sign in
              </Link>
              <Link href="/sign-up" className=" ml-5">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
