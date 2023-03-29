import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <h4 className="text-warning">Loading ...</h4>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
