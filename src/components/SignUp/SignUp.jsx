import React from "react";
import signupImg from "../../assets/signup/img_2.jpg";
import logo from "../../assets/bg_logo.png";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col-reverse lg:flex-row items-center justify-between">
      {/* Left section with gradient background */}
      <div className="w-full lg:w-[60%] h-full bg-gradient-to-r from-gray-50 to-gray-200 p-8 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
          <Link to="/signin">
            <img
              src={logo}
              alt="logo"
              className="w-28 lg:w-32 object-contain drop-shadow-lg"
            />
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#ff5e38] mb-4 text-center lg:text-left">
            Let's Create Your Account
          </h1>
          <p className="text-gray-600 mb-6 text-center lg:text-left">
            Join us for a seamless shopping experience!
          </p>

          <form className="space-y-5">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <Input label="First Name" type="text" name="firstname" />
              <Input label="Last Name" type="text" name="lastname" />
            </div>
            <Input label="Email Address" type="email" name="email" />
            <Input label="Password" type="password" name="password" />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />

            <button className="w-full py-3 bg-gradient-to-r from-[#FF5E38] to-[#ff7e60] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl duration-300 hover:bg-black transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5E38]">
              Sign Up Now
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#ff5e38] font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right section with signup image */}
      <div className="hidden lg:block w-[40%] h-full">
        <img
          src={signupImg}
          alt="Sign Up"
          className="h-full w-full object-cover shadow-xl "
        />
      </div>
    </div>
  );
};

export default SignUp;
