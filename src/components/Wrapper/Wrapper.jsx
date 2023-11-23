import { useState } from "react";
import Numbers from "../Numbers/Numbers";
import Actions from "../Actions/Actions";
import "./Wrapper.css";
import Button from "../Button/Button";

export default function Wrapper() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
  let actions = ["+", "-", "*", "/", "c", "="];
  const [res, setRes] = useState("0");
  const [currNum, setCurrNum] = useState("");
  const [firstParam, setFirstParam] = useState();
  const [action, setAction] = useState("");

  function handleNumberClick(n) {
    if (n === "." && currNum === "") {
      setCurrNum("0.");
    } else if (currNum === "0" && n !== ".") {
      setCurrNum(n + "");
    } else {
      setCurrNum(currNum + n);
    }
    if (action === "=") {
      setFirstParam();
      setRes("" + n);
    }
  }
  function handleActionClick(a) {
    if (currNum === ".") {
      setFirstParam(0);
      setCurrNum("");
    }
    if (firstParam === undefined) {
      currNum === "" ? setFirstParam(0) : setFirstParam(+currNum);
      setCurrNum("");
      setRes(currNum === "" ? 0 : +currNum);
    } else if (firstParam !== undefined && currNum !== "") {
      switch (action) {
        case "+":
          setFirstParam(+currNum + firstParam);
          setCurrNum("");
          setRes(+currNum + firstParam);
          break;
        case "-":
          setFirstParam(+firstParam - +currNum);
          setCurrNum("");
          setRes(firstParam - +currNum);
          break;
        case "*":
          setFirstParam(+currNum * firstParam);
          setCurrNum("");
          setRes(firstParam * +currNum);
          break;
        case "/":
          setFirstParam(firstParam / +currNum);
          setCurrNum("");
          setRes(firstParam / +currNum);
          break;
        case "=":
          setRes(firstParam * +currNum);
          setCurrNum("");
          break;
        default:
      }
    }
    setAction(a);
  }
  function changeSign() {
    if (currNum !== "" && currNum[0] !== "-") {
      setCurrNum("-" + currNum);
    } else if (currNum[0] === "-") {
      setCurrNum(currNum.slice(1));
    }
  }
  return (
    <div className="wrapper">
      <div className="showCalculations">
        {action !== "=" && (
          <div className="calculation">{`${
            firstParam !== undefined ? firstParam : ""
          } ${action} ${currNum}`}</div>
        )}
        <div className="result">{res}</div>
      </div>
      <div className="buttonsWrapper">
        <Numbers
          numbers={numbers}
          onClick={handleNumberClick}
          disable0={action === "/"}
        ></Numbers>
        <div className="actionsWrapper">
          <Actions
            actions={actions}
            onClick={handleActionClick}
            onClear={() => {
              setRes("");
              setAction("");
              setCurrNum("");
              setFirstParam();
            }}
          ></Actions>
          <Button type={"+/-"} onClick={changeSign}></Button>
        </div>
      </div>
    </div>
  );
}
