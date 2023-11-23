import "./Button.css"
export default function Button({type,onClick,disabled}){
  return(
    <button onClick={onClick} disabled={disabled} className="btn">{type}</button>
  )
}