import React from "react";
import { LargeButtonContainer } from "../../styled";

const LargeButton = ({ item, handleButtonClick }) => {
  return (
    <LargeButtonContainer onClick={() => handleButtonClick(item.title)}>
      {item.title}
    </LargeButtonContainer>
  );
};

export default LargeButton;
