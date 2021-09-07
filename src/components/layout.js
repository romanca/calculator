import React from "react";
import Keypad from "./keypad";

const Layout = () => {
  return (
    <div
      style={{
        height: 600,
        width: 400,
        border: "1px solid black",
        borderRadius: 10,
      }}
    >
      <Keypad />
    </div>
  );
};

export default Layout;
