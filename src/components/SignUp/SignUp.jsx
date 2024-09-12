import React from "react";
import signupImg from "../../assets/signup/img_2.jpg";
import logo from "../../assets/bg_logo.png";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-between">
      {/* Left section with gradient background */}
      <div className="w-full lg:w-[60%] h-full bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] p-6 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/signin">
            <img src={logo} alt="logo" className="w-32 object-contain drop-shadow-lg" />
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Create Your Account
          </p>
          <p className="text-gray-600 mb-8">
            Join us for a seamless shopping experience!
          </p>

          <form className="space-y-6">
            <div className="flex gap-4">
              <Input label="First Name" type="text" name="firstname" />
              <Input label="Last Name" type="text" name="lastname" />
            </div>
            <Input label="Email Address" type="email" name="email" />
            <Input label="Password" type="password" name="password" />
            <Input label="Confirm Password" type="password" name="confirmPassword" />

            <button className="w-full py-3 bg-gray-800 text-white rounded-md font-semibold shadow-md hover:bg-gray-900 transition duration-300">
              Sign Up Now
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-gray-800 font-medium hover:underline">
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
          className="h-full w-full object-cover shadow-xl"
        />
      </div>
    </div>
  );
};

export default SignUp;
