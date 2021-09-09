import React from "react";

const LongButton = ({ item }) => {
  return (
    <div
      style={{
        width: "25%",
        height: "200%",
        marginTop: -80,
        fontSize: "3rem",
        fontFamily: "inherit",
        background: "#76ff03",
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

export default LongButton;
