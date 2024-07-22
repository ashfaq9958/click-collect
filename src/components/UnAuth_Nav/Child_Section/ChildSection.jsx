import React from "react";
import child from "../../../assets/child.jpg";

const ChildSection = () => {
  return (
    <div className="flex mt-20 ">
      <img src={child} alt="" className="w-1/2" />
      <div className=" w-1/2 bg-[#f9f9f9]">
        <div className="p-20">
          <h1 className="text-4xl font-bold">FAVOURITE BRANDS </h1>
          <h1 className="text-3xl font-bold mt-2">KIDS CLOTHES </h1>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptatem molestias eum provident rerum quod numquam inventore sit
            non beatae Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati adipisci hic dolores quos illo quidem similique labore
            molestias excepturi soluta!.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            facilis natus ut laudantium, in ea voluptatem eos aperiam ex debitis
            cum perferendis! Fugiat, debitis ipsum? Aut tenetur tempore aperiam
            esse voluptas? Omnis eveniet dolore quia adipisci nobis, explicabo
            error recusandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildSection;
