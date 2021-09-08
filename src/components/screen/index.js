import React from "react";
import ComputationScreen from "./computationScreen";
import ResultScreen from "./resultScreen";

const Screen = () => {
  return (
    <div
      style={{
        height: 200,
        width: 400,
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderRadius: "5px 5px 0px 0px",
        color: "white",
        background: "green",
      }}
    >
      <ResultScreen />
      <ComputationScreen />
    </div>
  );
};

export default Screen;
