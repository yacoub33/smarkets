import React from "react";

function UpcomingContainer({ eventTitle }) {
  return (
    <div
      onClick={() => alert("Feature not added")}
      className="hover:cursor-pointer my-2 mr-2 h-[150px] w-[330px] bg-[#1a1a1a] rounded-md shadow-xl relative flex flex-col justify-between  hover:bg-[#2f2f2f]/80"
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold text-white p-3">
          {eventTitle.split(" vs ").map((segment, index) => (
            <div key={index}>{segment}</div>
          ))}
        </h1>
      </div>

      <div className="flex justify-between">
        <div className="flex">
          <div className="w-[70px] h-[40px] bg-[#4DAB6C] m-2 rounded-sm flex justify-center items-center">
            <h1 className="text-white font-semibold">3.2</h1>
          </div>
          <div className="w-[70px] h-[40px] bg-[#255EA1] m-2 rounded-sm flex justify-center items-center">
            <h1 className="text-white font-semibold">3.2</h1>
          </div>
        </div>
        <div className="w-[100px] h-[50px] flex justify-end mr-2 items-end">
          <h1 className="text-yellow-400 font-light">550k</h1>
        </div>
      </div>
    </div>
  );
}

export default UpcomingContainer;
