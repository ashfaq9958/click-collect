import React from "react";
import notFound from "../../assets/pagenotfound/notfound.jpg";

const NotFound = () => {
  return (
    <div className="w-full h-screen border border-red-600">
      <div className="w-[65%] mx-auto ">
        <img src={notFound} alt="Not Found" />
      </div>
    </div>
  );
};

export default NotFound;
