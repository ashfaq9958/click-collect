import React from "react";
import logo from "../../assets/girl_1.png";
import men from "../../assets/men_1.png";
import child from "../../assets/child_1.png";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-16 mb-4">
      <div className="rounded-xl shadow-md h-32 flex items-center justify-evenly">
        <img src={logo} alt="logo" className="h-24" />
        <div>
          {" "}
          <p className=" ">Women Products</p>
          <p className="text-xl font-bold text-center mt-2 ">210k</p>
        </div>
      </div>

      <div className="rounded-xl shadow-md h-32 flex items-center justify-around">
        <img src={men} alt="logo" className="h-24" />
        <div>
          {" "}
          <p className=" ">Men Products</p>
          <p className="text-xl font-bold text-center mt-2">210k</p>
        </div>
      </div>

      <div className="rounded-xl shadow-md h-32 flex items-center justify-around">
        <img src={child} alt="logo" className="h-24" />
        <div>
          {" "}
          <p className=" ">Child Products</p>
          <p className="text-xl font-bold text-center mt-2">210k</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
