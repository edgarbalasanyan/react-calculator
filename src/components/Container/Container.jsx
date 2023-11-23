import { useState, useRef } from "react";
import Button from "../Button/Button";

export default function Container() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let actions = ["+", "-", "*", "/", "c", "="];
  const [firstParam, setFirstParam] = useState(0);
  const [secondParam, setSecondParam] = useState(undefined);
  const [res, setRes] = useState(0);
  const [action, setAction] = useState("");

  const [todo, setTodo] = useState("");
  console.log(firstParam, secondParam);
  return (
    <>
      <div>
        {secondParam !== undefined
          ? firstParam +
            (todo !== "=" && todo !== "c" ? todo + secondParam : "")
          : firstParam}
      </div>
      <div>
        {secondParam === undefined
          ? res
          : `${firstParam}  ${action} ${secondParam}`}
      </div>
      {numbers.map((el) => {
        return (
          <Button
            type={el}
            key={el}
            onClick={() => {
              if (todo) {
                setSecondParam(
                  secondParam !== undefined ? secondParam * 10 + el : el
                );
              } else {
                setFirstParam(firstParam * 10 + el);
              }
            }}
          ></Button>
        );
      })}
      {actions.map((el) => {
        return (
          <Button
            type={el}
            key={el}
            onClick={() => {
              console.log("---------", el);
              setTodo(el, secondParam);
              if (todo && secondParam !== undefined) {
                switch (todo) {
                  case "+":
                    // setFirstParam(firstParam + secondParam);
                    // setSecondParam();
                    break;
                  case "-":
                    setFirstParam(firstParam - secondParam);
                    setSecondParam();
                    break;
                  case "*":
                    setFirstParam(firstParam * secondParam);
                    setSecondParam();
                    break;
                  case "/":
                    setFirstParam(firstParam / secondParam);
                    setSecondParam();
                    break;
                  case "c":
                    setFirstParam(0);
                    setSecondParam();
                    break;
                  default:
                }
              }
            }}
          ></Button>
        );
      })}
    </>
  );
}
