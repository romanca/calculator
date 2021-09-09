import React from "react";
import { LargeButtonContainer } from "../../styled";

const LargeButton = ({ item }) => {
  return <LargeButtonContainer>{item.title}</LargeButtonContainer>;
};

export default LargeButton;
