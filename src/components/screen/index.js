import React from "react";
import { ScreenContainer } from "../../styled";
import ComputationScreen from "./computationScreen";
import ResultScreen from "./resultScreen";

const Screen = ({ operation, currentNumber }) => {
  return (
    <ScreenContainer>
      <ResultScreen operation={operation} />
      <ComputationScreen currentNumber={currentNumber} />
    </ScreenContainer>
  );
};

export default Screen;
