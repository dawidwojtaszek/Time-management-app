const UserNav = ({ user, logOut }) => {
  return (
    <ul className="flex justify-between">
      <li className="mr-5">{user.email}</li>
      <li>
        <button className=" bg-red-500 text-white px-5" onClick={logOut}>
          Log out
        </button>
      </li>
    </ul>
  );
};

export default UserNav;
