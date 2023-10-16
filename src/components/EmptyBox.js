import React from "react";

function EmptyBox() {
  return (
    <div className="animate-pulse my-2 mr-2 h-[160px] w-[310px] bg-[#1a1a1a] rounded-md shadow-xl relative flex items-center justify-center">
      <img
        className="w-[150px] opacity-50"
        src="https://smarkets.com/static/assets/smarkets-logo.33cf24e1279443342527.svg"
        alt="logo"
      />
    </div>
  );
}

export default EmptyBox;
