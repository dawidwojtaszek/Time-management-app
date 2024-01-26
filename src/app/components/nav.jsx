import Link from "next/link";

const Nav = () => (
  <ul className="flex justify-between">
    <li>
      <Link href="/sign-in">Sign in</Link>
    </li>
    <li>
      <Link href="/sign-up" className=" mx-5">
        Sign up
      </Link>
    </li>
  </ul>
);

export default Nav;
