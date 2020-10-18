import React from "react";

// eslint-disable-next-line react/prop-types
const Scroll = ({ children }) => {
  return (
    <div
      style={{ overflow: "auto", border: "3px solid black", height: "500px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
