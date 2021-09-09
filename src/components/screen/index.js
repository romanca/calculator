import React from "react";
import { ScreenContainer } from "../../styled";
import ComputationScreen from "./computationScreen";
import ResultScreen from "./resultScreen";

const Screen = () => {
  return (
    <ScreenContainer>
      <ResultScreen />
      <ComputationScreen />
    </ScreenContainer>
  );
};

export default Screen;
