import React from "react";
import child from "../../../assets/child.jpg";

const ChildSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-14 w-full">
      {/* Image Section */}
      <img
        src={child}
        alt="Child"
        className="w-full md:w-1/2 object-cover"
      />

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-[#f9f9f9] p-6 md:p-20">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            FAVOURITE BRANDS
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold">
            KIDS CLOTHES
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptatem molestias eum provident rerum quod numquam inventore sit
            non beatae Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati adipisci hic dolores quos illo quidem similique labore
            molestias excepturi soluta!.
          </p>
          <p className="text-sm md:text-base mt-4">
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
