import React from "react";
import companylogo from "../../assets/elogo2.jpg";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import login from "../../assets/img_4.jpg";
const SignIn = () => {
  return (
    <div className="flex w-full h-screen">
      <div className=" w-1/2 ">
        <div className="flex justify-center">
          <img src={companylogo} alt="Company Logo" className="h-28 mt-2" />
        </div>
        <div className=" w-1/2 mx-auto mt-2 ">
          <div className="mb-4">
            <h1 className="text-[46px] text-[#ff5e38] font-semibold font-eczar inline  mr-44">
              Hello,
            </h1>
            <p className="text-[46px] font-bold font-eczar -mt-4 ">
              Welcome Back !!
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label
                for="email"
                className="block text-sm font-medium font-eczar  "
              >
                Email address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="password"
                className="block text-sm font-medium  font-eczar"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm  font-eczar mt-1"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 font-eczar"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full font-eczar py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF5E38] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center  my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4  font-eczar">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className=" w-[45%]">
              <a
                href="#"
                className=" w-full inline-flex justify-center gap-3 !font-eczar items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50"
              >
                <img className="h-5 w-5 " src={google} alt="Google" />
                <span>Google</span>
              </a>
            </div>

            <div className="w-[45%]">
              <a
                href="#"
                className="w-full inline-flex justify-center gap-3 !font-eczar items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50"
              >
                <img className="h-6 w-6" src={facebook} alt="Google" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src={login} alt="Login Image" className="w-full h-screen" />
      </div>
    </div>
  );
};

export default SignIn;
