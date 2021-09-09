import React from "react";

const LargeButton = ({ item }) => {
  return (
    <div
      style={{
        width: "50.5%",
        height: "100%",
        fontSize: "3rem",
        fontFamily: "inherit",
        background: "#212121",
        border: "1px solid #eee",
        outline: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        cursor: "pointer",
        fontFamily: "ArialRoundedMTBold",
        color: "white",
      }}
    >
      {item.title}
    </div>
  );
};

export default LargeButton;
