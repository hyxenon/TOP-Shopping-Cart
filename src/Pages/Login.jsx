import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import fbLogo from "../assets/facebook.svg";
import { useNavigate } from "react-router-dom";
import LogInContext from "../context/LogInContext";

const Login = () => {
  const navigate = useNavigate();

  const { formSubmit, handleOnChange } = useContext(LogInContext);
  return (
    <div className="flex flex-col items-center grow mt-16">
      <div className="bg-white w-[427px] h-[417px]  flex flex-col items-center border-2 border-gray-500 rounded-sm filter drop-shadow">
        <img className="w-32 h-5 mt-8" src={logo} alt="../assets/logo.svg" />

        <form
          className="mt-12 flex flex-col gap-2"
          onSubmit={(e) => {
            formSubmit(e);
            navigate("/");
          }}
        >
          <input
            className="w-[308px] py-3 pl-4 text-xs border-2 border-gray-500"
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={(e) => handleOnChange(e)}
          />
          <input
            className="w-[308px] py-3 pl-4 text-xs border-2 border-gray-500"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button
            className="bg-primary text-white font-bold py-2 mt-4 rounded-xl transition-all hover:bg-orange-300 active:scale-110"
            type="submit"
          >
            Log In
          </button>
        </form>

        <div className="mt-5 flex justify-between items-center gap-7">
          <div className="border w-28 h-0 border-gray-500"></div>
          <h1 className="text-xs text-gray-600">OR</h1>
          <div className="border w-28 h-0 border-gray-500"></div>
        </div>

        <div className="flex items-center gap-1 mt-6">
          <img src={fbLogo} alt="../assets/facebook.svg" />
          <button className="text-sm text-blue-800 cursor-pointer hover:text-blue-500 active:scale-110 transition-all">
            Log in with Facebook
          </button>
        </div>

        <h1 className="mt-6 text-sm cursor-pointer hover:text-gray-400 transition-all active:scale-110">
          Forgot password?
        </h1>
      </div>

      <div className="bg-white w-[427px] h-16 mt-4 flex justify-center items-center border-2 border-gray-500 rounded-sm filter drop-shadow">
        <h1 className="text-sm">
          Don't have an account?{" "}
          <span className="text-blue-800 cursor-pointer transition-all hover:text-blue-500 ">
            Sign up
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Login;
