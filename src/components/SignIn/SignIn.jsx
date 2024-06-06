import React from "react";
import companylogo from "../../assets/elogo2.jpg";
const SignIn = () => {
  return (
    <div className="">
      <div className=" border-2 ">
        <div className="flex justify-center">
          <img
            src={companylogo}
            alt="Company Logo"
            className="h-20 "
          />
        </div>
        <div className="text-center mt-2">
          <h1 className="text-[46px] font-semibold font-eczar inline  mr-44">
            Hello,
          </h1>
          <p className="text-[46px] font-semibold font-eczar -mt-4">
            Welcome Back
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
