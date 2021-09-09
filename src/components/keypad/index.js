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

const Keypad = () => {
  return (
    <KeypadContainer>
      <ButtonsLine>
        {firstButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </ButtonsLine>
      <ButtonsLine>
        {secondButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </ButtonsLine>
      <ButtonsLine>
        {thirdButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </ButtonsLine>
      <FourthButtonLine>
        {fourthButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </FourthButtonLine>
      <ButtonsLine>
        {fifthButtonLine.map((item) => {
          return item.title === "0" ? (
            <LargeButton item={item} />
          ) : item.title === "=" ? (
            <LongButton item={item} />
          ) : (
            <Button item={item} />
          );
        })}
      </ButtonsLine>
    </KeypadContainer>
  );
};

export default Keypad;
