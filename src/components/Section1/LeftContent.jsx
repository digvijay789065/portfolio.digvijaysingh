import React from "react";
import Buttons from "./Buttons";

const LeftContent = () => {
  return (
    <div className="h-[60vh] w-full  flex flex-col gap-10"  >
      <div className="text-yellow-300 font-bold ml-1">
        <h4>Hello!</h4>
      </div>
      <div className="text-yellow-300 text-8xl font-bold">
        <h4>
          <span className="text-white">I'm</span> Digvijay <br />Singh
        </h4>
      </div>
      <div>
        <h4 className="text-4xl font-bold uppercase ml-1">a mern stack developer</h4>
      </div>
      <Buttons />
    </div>
  );
};

export default LeftContent;
