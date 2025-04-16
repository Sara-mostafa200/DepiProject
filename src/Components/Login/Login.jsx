import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  return (
    <main className="!bg-WelcomBack min-h-screen bg-cover bg-center flex justify-center items-center">
      <div className="bg-balckback text-white p-6 flex flex-col gap-16 rounded-md">
        {/* headline */}
        <h2 className=" text-[50px] font-bold text-center">Sign In</h2>

        {/* inputs field */}
        <form className="flex flex-col justify-center items-center gap-y-6 w-full   ">
          {/* email field */}
          <input
            className="bg-[#d9d9d980] placeholder:text-white rounded-md"
            type="email"
            placeholder="Enter Your Email"
          />

          {/* password field */}
          <input
            className="bg-[#d9d9d980] placeholder:text-white rounded-md"
            type="password"
            placeholder="Enter Your Password"
          />

          {/* forgot password */}
          <span className="text-sm self-end cursor-pointer text-blue-700 ">
            Forgot password?
          </span>

          {/* Sign In  */}
          <button type="submit" className="bg-mainColor w-full px-3 py-2 font-inter font-[600] text-[20px] rounded-xl ">
            Sign In
          </button>

          {/* don’t have account ? */}
          <p className="cursor-pointer " onClick={()=>{navigate("/signUp")}}>
           don’t have account ? <span className="text-blue-700">Sign up</span> 
          </p>
        </form>
      </div>
    </main>
  );
}
