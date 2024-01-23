const SignIn = () => (
  <div className="flex justify-center mt-12">
    <div className=" flex flex-col bg-slate-300 text-black w-[350px] h-min-[350px] rounded-lg p-10">
      <span className="font-bold text-5xl mb-5">Sign In</span>
      <label className="text-slate-800">
        email:
        <input
          className="p-3 rounded-md mb-2"
          type="email"
          placeholder="email@email.com"
        />
      </label>
      <label className=" text-slate-800 ">
        password:
        <input
          type="password"
          className="p-3 rounded-md mb-2"
          placeholder="password"
        />
      </label>
      <button className="w-full py-4 bg-lime-600 rounded-md mt-2">
        Sign In
      </button>
    </div>
  </div>
);

export default SignIn;
