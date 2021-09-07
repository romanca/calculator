import React from "react";

const Button = ({ children }) => {
  return (
    <div
      style={{
        width: "25%",
        height: "100%",
        fontSize: "3rem",
        fontFamily: "inherit",
        background: "white",
        border: "1px solid #eee",
        outline: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        cursor: "pointer",
        fontFamily: "ArialRoundedMTBold",
      }}
    >
      {children}
    </div>
  );
};

export default Button;
