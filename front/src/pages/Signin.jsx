import React from "react";

const Signin = () => {
  return (
    <div className="bg-gradient-to-b from-slate-500 to-slate-900 h-screen w-screen flex">
      <div className=" flex flex-col items-center w-2/3">
        <img
          src="logos/logo_keybox_white.png"
          alt="logo_keybox"
          className="w-40 h-40 object-cover object-center"
        />
        <div className=" bg-white rounded-xl px-10 py-7">
          <h2 className="text-3xl font-bold mb-5 text-center">Sign in</h2>
          <form action=" " method="post" className="flex flex-col">
            <label htmlFor="email">Email</label>
            <div className=" relative">
              <img
                src="icons/Letter.svg"
                alt="icon_email"
                className="object-cover rounded object-center absolute bg-slate-500 p-1 right-0 h-7 w-7"
              />
              <input type="email" name="email" id="email" />
            </div>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <a href="/">Forgot password ?</a>
            <button className="bg-slate-400 p-3 rounded hover:bg-slate-500 transition duration-300 ease-in-out">
              Sign in
            </button>
          </form>
          <div>
            <hr />
            <p>Don't have an account yet ?</p>
            <button className="bg-purple-400 p-3 rounded hover:bg-purple-500 transition duration-300 ease-in-out">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="images/bg_sign.jpg"
          alt="img_illustartion_desk_pc"
          className="w-full h-full object-fit object-center"
        />
      </div>
    </div>
  );
};

export default Signin;
