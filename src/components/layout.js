import React from "react";
import { LayoutContainer } from "../styled";
import Keypad from "./keypad";
import Screen from "./screen";

const Layout = () => {
  return (
    <LayoutContainer>
      <Screen />
      <Keypad />
    </LayoutContainer>
  );
};

export default Layout;
