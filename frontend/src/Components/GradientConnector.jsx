import React from "react";

function GradientConnector() {
  return (
    <div className="relative w-screen overflow-hidden">
        <div className="h-[50vh] bg-gradient-to-b from-[#1F1327] to-[#171717]"></div>
      {/* <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 z-0 to-teal-500 rounded-lg blur opacity-35 max-w-screen"></div> */}
    </div>
  );
}

export default GradientConnector;
