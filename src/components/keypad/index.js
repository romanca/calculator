import React from "react";
import Button from "./button";
import LargeButton from "./largeButton";

const Keypad = () => {
  const firstButtonLine = [
    {
      id: 1,
      title: "C",
    },
    {
      id: 2,
      title: "←",
    },
    {
      id: 3,
      title: "%",
    },
    {
      id: 4,
      title: "/",
    },
  ];

  const secondButtonLine = [
    {
      id: 5,
      title: "7",
    },
    {
      id: 6,
      title: "8",
    },
    {
      id: 7,
      title: "9",
    },
    {
      id: 8,
      title: "*",
    },
  ];

  const thirdButtonLine = [
    {
      id: 9,
      title: "4",
    },
    {
      id: 10,
      title: "5",
    },
    {
      id: 11,
      title: "6",
    },
    {
      id: 12,
      title: "-",
    },
  ];

  const fourthButtonLine = [
    {
      id: 13,
      title: "1",
    },
    {
      id: 14,
      title: "2",
    },
    {
      id: 15,
      title: "3",
    },
    {
      id: 16,
      title: "+",
    },
  ];
  const fifthButtonLine = [
    {
      id: 17,
      title: "0",
    },
    {
      id: 18,
      title: ".",
    },
    {
      id: 19,
      title: "=",
    },
  ];
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
          return <Button>{item.title}</Button>;
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
          return <Button>{item.title}</Button>;
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
          return <Button>{item.title}</Button>;
        })}
      </div>
      <div
        style={{
          height: "10.4vh",
          width: "100%",
          display: "flex",
        }}
      >
        {fourthButtonLine.map((item) => {
          return <Button>{item.title}</Button>;
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
          return item.title !== "=" ? (
            <Button>{item.title}</Button>
          ) : (
            <LargeButton item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Keypad;
