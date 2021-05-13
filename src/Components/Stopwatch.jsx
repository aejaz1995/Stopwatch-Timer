import React from 'react'
import {Time} from '../Components/utils'
import styleSheet from "./Css/Application.module.css"


const Stopwatch = () => {

    let [mSec, setMsec ] =React.useState(0)
    const [isRuning, setIsruning] =React.useState(false)

    const ref = React.useRef()
    React.useEffect(()=>{

         ref.current = setInterval(()=>{
            if(isRuning)
            {
                setMsec(prev => prev + 1)

            }
            else {
                clearInterval(ref.current)
                // setTimer(0)
                // setMin(0)
            }
            
        },10)
    return()=>{

        clearInterval(ref.current)
    }
    },[mSec,isRuning])

   
    const handleStop=()=>{
         setIsruning(!isRuning)
        console.log(isRuning)
    }

    const handleReset=()=>{
        clearInterval(ref.current)
        setIsruning(!isRuning)
        setMsec(0)
    }
    
    return (
        <div className={styleSheet.display}>
            
            {/* {hour <=9 ? "0"+hour+'hour':hour}&nbsp;&nbsp;{min <=9 ? "0"+min+'min' :min}&nbsp;&nbsp;{sec <=9 ? "0"+sec+'sec' :sec } &nbsp;&nbsp;{mSec <= 9 ? "0"+mSec : mSec} */}
           
            <p className={styleSheet.display__time}>{ Time(mSec)}</p>
        
           
           <div className={styleSheet.btn_div}>
                <button onClick={handleStop}  style={isRuning ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white",color:"black"}}>{isRuning ? `Stop` : `Start`}</button>
                <button onClick={handleReset}>Reset</button>
           </div>

        </div>
    )
}

export { Stopwatch }
