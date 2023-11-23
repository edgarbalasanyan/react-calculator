import Button from "../Button/Button";
import "./Numbers.css";
export default function Numbers({ numbers, onClick,btn0,disable0}) {
  return (
    <div className="numbers">
      {numbers.map((n) => {
        if(n===0){
          return  <Button type={0} key={0} disabled={disable0} onClick={()=>{
            onClick(0);
          }}></Button>;
        }
        return <Button type={n} key={n} onClick={()=>{
          onClick(n);
        }}></Button>;
      })}
    </div>
  );
}
