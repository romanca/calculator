import React from "react";
import {
  fifthButtonLine,
  firstButtonLine,
  fourthButtonLine,
  secondButtonLine,
  thirdButtonLine,
} from "../../mockData";
import { ButtonsLine, FourthButtonLine, KeypadContainer } from "../../styled";
import Button from "./button";
import LargeButton from "./largeButton";
import LongButton from "./longButton";

const Keypad = ({ handleButtonClick }) => {
  return (
    <KeypadContainer>
      <ButtonsLine>
        {firstButtonLine.map((item) => {
          return <Button item={item} handleButtonClick={handleButtonClick} />;
        })}
      </ButtonsLine>
      <ButtonsLine>
        {secondButtonLine.map((item) => {
          return <Button item={item} handleButtonClick={handleButtonClick} />;
        })}
      </ButtonsLine>
      <ButtonsLine>
        {thirdButtonLine.map((item) => {
          return <Button item={item} handleButtonClick={handleButtonClick} />;
        })}
      </ButtonsLine>
      <FourthButtonLine>
        {fourthButtonLine.map((item) => {
          return <Button item={item} handleButtonClick={handleButtonClick} />;
        })}
      </FourthButtonLine>
      <ButtonsLine>
        {fifthButtonLine.map((item) => {
          return item.title === "0" ? (
            <LargeButton item={item} handleButtonClick={handleButtonClick} />
          ) : item.title === "=" ? (
            <LongButton item={item} handleButtonClick={handleButtonClick} />
          ) : (
            <Button item={item} handleButtonClick={handleButtonClick} />
          );
        })}
      </ButtonsLine>
    </KeypadContainer>
  );
};

export default Keypad;
