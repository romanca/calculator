import React from "react";
import { LayoutContainer } from "../styled";
import Keypad from "./keypad";
import Screen from "./screen";

const Layout = () => {
  const [operation, setOperation] = React.useState("");
  const [currentNumber, setCurrentNumber] = React.useState("0");
  const [operator, setOperator] = React.useState(false);
  const [decimal, setDecimal] = React.useState(false);

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        if (currentNumber !== "0") {
          setCurrentNumber(currentNumber + buttonValue);
          setOperator(false);
        } else {
          setCurrentNumber(buttonValue);
        }
        break;
      }
      case "*":
      case "+":
      case "-":
      case "/": {
        if (!operator) {
          setCurrentNumber(currentNumber + buttonValue);
          setOperator(currentNumber + buttonValue);
        }
        break;
      }
      case "C":
        setOperation("");
        setCurrentNumber("0");
        break;
      case "=":
        setOperation(currentNumber);
        const result = currentNumber.includes(".")
          ? eval(currentNumber).toFixed(2)
          : eval(currentNumber);
        setCurrentNumber(result);

        break;
      case ".":
        if (!decimal) {
          setCurrentNumber(currentNumber + ".");
          setDecimal(true);
        }
        break;
      case "←":
        const newNumber =
          currentNumber.length > 1
            ? currentNumber.slice(0, currentNumber.length - 1)
            : "0";
        setCurrentNumber(newNumber);
        break;
      default:
        break;
    }
  };
  return (
    <LayoutContainer>
      <Screen operation={operation} currentNumber={currentNumber} />
      <Keypad handleButtonClick={handleButtonClick} />
    </LayoutContainer>
  );
};

export default Layout;
