import logo from './logo.svg';
import './App.css';
import { Stopwatch } from './Components/Stopwatch';
import { Timer } from './Components/Timer';
import  React from "react"
function App() {

  const [isOn, setIsOn] =React.useState(true)

  return (
    <div className="App">
        <div className="App__header" >
            <div onClick={()=> setIsOn(true)} style={isOn ==true?{backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}}>Timer</div>
            <div onClick={()=> setIsOn(false)} style={isOn ==false?{backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}}>Stopwatch</div> 
       </div>
       
         {isOn ? <Timer isOn={isOn}/> : <Stopwatch isOn={isOn}/>}



    </div>
  );
}

export default App;
