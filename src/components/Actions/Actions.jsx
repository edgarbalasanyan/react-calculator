import Button from "../Button/Button";
import "./Actions.css";
export default function Actions({ actions, onClick, onClear}) {
  return (
    <div className="actions">
      {actions.map((n) => {
        if (n === "c") {
          return <Button type="c" onClick={onClear} key={"c"}></Button>;
        }
        return (
          <Button
            type={n}
            key={n}
            onClick={() => {
              onClick(n);
            }}
          ></Button>
        );
      })}
    </div>
  );
}
