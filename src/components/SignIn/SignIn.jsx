import React from "react";
import companylogo from "../../assets/elogo2.jpg";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import login from "../../assets/img_3.jpg";
import Input from "../Input/Input";

const SignIn = () => {
  return (
    <div className="flex justify-between reverse md:flex-row w-full h-screen">
      <div className="hidden md:block w-1/2">
        <img
          src={login}
          alt="login"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="w-full md:w-[30%] mx-auto flex flex-col justify-center p-6 md:p-12">
        <div className="flex justify-center">
          <img src={companylogo} alt="Company Logo" className="h-16 md:h-20" />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-[32px] md:text-[46px] text-[#ff5e38] font-semibold">Hello,</h1>
          <p className="text-[24px] md:text-[46px] font-semibold">Welcome Back!</p>
        </div>
        <form className="space-y-6">
          <div>
            <Input label="Email address" type="email" name="email" />
          </div>
          <div>
            <Input label="Password" type="password" name="password" />
          </div>
          <div className="flex justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="mt-1">Remember me</span>
            </label>
            <a href="#" className="text-indigo-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF5E38] hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-between">
          <a
            href="#"
            className="w-[45%] inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <img className="h-5 w-5 mr-2" src={google} alt="Google" />
            Google
          </a>
          <a
            href="#"
            className="w-[45%] inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <img className="h-6 w-6 mr-2" src={facebook} alt="Facebook" />
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
