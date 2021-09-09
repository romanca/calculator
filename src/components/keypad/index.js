import React from "react";
import {
  fifthButtonLine,
  firstButtonLine,
  fourthButtonLine,
  secondButtonLine,
  thirdButtonLine,
} from "../../mockData";
import Button from "./button";
import LargeButton from "./largeButton";
import LongButton from "./longButton";

const Keypad = () => {
  return (
    <div
      style={{
        height: 400,
        background: "#eee",
        width: "100%",
        borderRadius: "0px 0px 10px 10px",
      }}
    >
      <div
        style={{
          height: "10.4vh",
          width: "100%",
          display: "flex",
        }}
      >
        {firstButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </div>
      <div
        style={{
          height: "10.4vh",
          width: "100%",
          display: "flex",
        }}
      >
        {secondButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </div>
      <div
        style={{
          height: "10.4vh",
          width: "100%",
          display: "flex",
        }}
      >
        {thirdButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </div>
      <div
        style={{
          height: "10.4vh",
          width: "98%",
          display: "flex",
        }}
      >
        {fourthButtonLine.map((item) => {
          return <Button item={item} />;
        })}
      </div>
      <div
        style={{
          height: "10.4vh",
          width: "100%",
          display: "flex",
        }}
      >
        {fifthButtonLine.map((item) => {
          return item.title === "0" ? (
            <LargeButton item={item} />
          ) : item.title === "=" ? (
            <LongButton item={item} />
          ) : (
            <Button item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Keypad;
