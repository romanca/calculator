import React from "react";
import { LongButtonContainer } from "../../styled";

const LongButton = ({ item }) => {
  return <LongButtonContainer>{item.title}</LongButtonContainer>;
};

export default LongButton;
