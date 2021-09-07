import React from "react";
import ComputationScreen from "./computationScreen";
import ResultScreen from "./resultScreen";

const Screen = () => {
  return (
    <div
      style={{
        height: 200,
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderRadius: "10px 10px 0px 0px",
        color: "white",
        background: "#7c4dff",
      }}
    >
      <ResultScreen />
      <ComputationScreen />
    </div>
  );
};

export default Screen;
