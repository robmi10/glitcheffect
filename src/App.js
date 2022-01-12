import Glitch from "./Glitch/Glitch";
import Ascii from "./Ascii";
import Cube from "./Cube/cube"
import React, {useState} from "react";
import "./index.css"
import IXtoken from "./IXlogo/ixlogo";

function App() {

  const [color, setColor] = useState("green")

  const setColor_green = () =>{
      setColor("green")
  }

  const setColor_red = () =>{
    setColor("red")
  }

  const setColor_blue = () =>{
    setColor("blue")
  }

  const setColor_nibiru = () =>{
    setColor("#e57468")
  }


  return (
    <>
    {/* <h1> Current color: {color}</h1>
      <div className="container1">
        <Ascii gif ={"https://media0.giphy.com/media/vETeJc11yHAas/giphy.gif"} color = {color}/>   
      </div>

      <div  className="container2">
        
        <Ascii gif ={"https://media3.giphy.com/media/7frSUXgbGqQPKNnJRS/giphy.gif?cid=ecf05e47e4bc7d987a38c6351211e4b48752cb8bdbbafe95&rid=giphy.gif&ct=g"} color = {color}/>   
      </div>

      <div  className="container3">
        
        <Ascii gif ={"https://media1.giphy.com/media/rEpyIYEGTqNFXQICsu/giphy.gif?cid=790b7611970a53de845db205afd53813dfb14df22e377f24&rid=giphy.gif&ct=g"} color = {color}/>  
      </div>

      <div  className="container4">
        
        <Ascii gif ={"https://media2.giphy.com/media/BAngO0KVd8bCaDgdas/giphy.gif"} color = {color}/>  
      </div>
 */}
 
  <IXtoken/>
    </>
  );
}

export default App;
