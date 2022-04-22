import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import { useCallback } from "react";
function App() {
  const [showparagraph, setshowparagraph] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);


  const togglebuttonhandler = useCallback(() => {
    if(allowToogle){
    setshowparagraph((prevhsow) => !prevhsow);}
  },[allowToogle]);
  const toogleallowhandler= ()=>{
    setAllowToogle(true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showparagraph} />
      <Button onClick={togglebuttonhandler}>toogle</Button>
      <Button onClick={toogleallowhandler}>toogle allow</Button>

    </div>
  );
}

export default App;
