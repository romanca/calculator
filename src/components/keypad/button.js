import React from "react";
import { ButtonContainer } from "../../styled";

const Button = ({ item, handleButtonClick }) => {
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
    <ButtonContainer
      style={{ background: switchBackgroundColors() }}
      onClick={() => handleButtonClick(item.title)}
    >
      {item.title}
    </ButtonContainer>
  );
};

export default Button;
