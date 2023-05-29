import React from "react";
import "./spiner.css";

function Spinner() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="spinner">
        <p className="text-bgDark text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}

export default Spinner;
