import React from "react";
import { ComputationScreenContainer } from "../../styled";

const ComputationScreen = ({ currentNumber }) => {
  return (
    <ComputationScreenContainer>{currentNumber}</ComputationScreenContainer>
  );
};

export default ComputationScreen;
