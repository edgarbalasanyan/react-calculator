import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  console.log(state, "state");
  return (
    <div className="App">
      <Wrapper></Wrapper>
    </div>
  );
}

export default App;
