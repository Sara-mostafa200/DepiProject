import React from "react";
import { useNavigate } from "react-router-dom";
import WelcomBack from "../../assets/WelcomeBack1.jpeg";

export default function SignUP() {
    // hooks
    const navigate = useNavigate();

  return (
    <main   style={{ backgroundImage: `url(${WelcomBack})` }}
    className=" min-h-screen bg-cover bg-center flex justify-center items-center">
      <div className="bg-balckback text-white p-6 my-5 flex flex-col gap-16 rounded-md">
        {/* headline */}
        <h2 className=" text-[50px] font-bold text-center max-w-80">Create your 
        account</h2>

        {/* inputs field */}
        <form className="flex flex-col justify-center items-center gap-y-6 w-full   ">

          {/* firstName field */}
          <input
            className="bg-[#d9d9d980] w-full placeholder:text-white rounded-md"
            type="text"
            placeholder="Enter Your Name"
          />

          {/* email field */}
          <input
            className="bg-[#d9d9d980] w-full placeholder:text-white rounded-md"
            type="email"
            placeholder="Enter Your Email"
          />

          {/* password field */}
          <input
            className="bg-[#d9d9d980] w-full placeholder:text-white rounded-md"
            type="password"
            placeholder="Enter Your Password"
          />

          {/* rePassword field */}
          <input
            className="bg-[#d9d9d980] w-full placeholder:text-white rounded-md"
            type="password"
            placeholder="Confirm Password"
          />

          {/* Sign Up  */}
          <button
            type="submit"
            className="bg-mainColor w-full px-3 py-2 font-inter font-[600] text-[20px] rounded-xl "
          >
            Sign Up
          </button>

          {/* have account ? Sign In */}
          <p
            className="cursor-pointer "
            onClick={() => {
              navigate("/login");
            }}
          >
            have account ? <span className="text-blue-700">Sign In</span>
          </p>
        </form>
      </div>
    </main>
  );
}
