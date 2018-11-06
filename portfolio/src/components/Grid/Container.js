import React from "react";
import "./Container.css";

export const Container = ({ fluid, children }) =>
  // <div className={`container${fluid ? "-fluid" : ""}`}>
  //   {children}
  // </div>;

  <div className="section white">
    <div className="container section">
      {children}

    </div>
  </div>
export default Container;