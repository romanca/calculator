import React from "react";
import { LongButtonContainer } from "../../styled";

const LongButton = ({ item, handleButtonClick }) => {
  return (
    <LongButtonContainer onClick={() => handleButtonClick(item.title)}>
      {item.title}
    </LongButtonContainer>
  );
};

export default LongButton;
