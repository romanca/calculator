import React from "react";
import Keypad from "./keypad";
import Screen from "./screen";

const Layout = () => {
  return (
    <div
      style={{
        height: 600,
        width: 400,
        boxShadow: "0 2rem 4rem",
        borderRadius: 10,
      }}
    >
      <Screen />
      <Keypad />
    </div>
  );
};

export default Layout;
