import React from "react";

const Button = ({ item }) => {
  const switchBackgroundColors = () => {
    return item.title === "C"
      ? "#ff1744"
      : item.title === "←"
      ? "orange"
      : item.title === "+"
      ? "#c6c6c6"
      : item.title === "/"
      ? "#c6c6c6"
      : item.title === "-"
      ? "#c6c6c6"
      : item.title === "*"
      ? "#c6c6c6"
      : "#212121";
  };

  React.useEffect(() => {
    switchBackgroundColors();
  });

  return (
    <div
      style={{
        width: "25%",
        height: "100%",
        fontSize: "3rem",
        fontFamily: "inherit",
        background: switchBackgroundColors(),
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

export default Button;
