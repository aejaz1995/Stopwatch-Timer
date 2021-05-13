import React from 'react'
import {Time_2} from "../Components/utils"
import styled from "styled-components"
import styleSheet from "./Css/Application.module.css"

/////////////////////////////////

const Input =styled.input`
width:0px;
height:0px;
outline:none;
border:none;
`

////////////////////////////////
const Timer = ({isOn}) => {
    const [val ,setVal] =React.useState(30000)
    const [timer, setTimer] = React.useState(300    )
    let timerRef= React.useRef()
    let inputRef = React.useRef()
    const [isRunning, setIsRunning] =React.useState(false)
    

    // 
    const [sec, setSec] =React.useState(0)
    const [min , setMin] =React.useState(0)
    const [hr, setHr] =React.useState(0)
    const [is, setIs] =React.useState(false)
    React.useEffect(() =>{

        timerRef =setInterval(() =>{
            
            if( isRunning  && timer > 0){
                setTimer(timer- 1)
                 
            }
            else{
                clearInterval(timerRef)
                 setIsRunning(false)
                     
            }
            

        }, 1000)

        return()=> clearInterval(timerRef)

    },[timer,isRunning])

const handleTimer=() => {
    setIsRunning(!isRunning)
    clearInterval(timerRef)
    setIs(false)

}
const handleReset=()=>{
    clearInterval(timerRef)
    setTimer(0)
}
const Toggle =() => {
    setIs(true)
}

const handleChange=(e)=>{
    
    setTimer(e.target.value)
    let num =e.target.value % 100
    let tenth = Math.floor((e.target.value / 100) % 100)
    let hundreth = Math.floor((e.target.value / 1000000 ) % 100)
   setSec(num)
   setMin(tenth)
   setHr(hundreth)
}

const handleClickOnTimer=()=>{
    inputRef.current.focus()
    setIsRunning(false)
    setTimer(300)
}

    return (
        <div className={styleSheet.display}>

            <span className={styleSheet.display__time} onClick={Toggle}>{is? <span>{hr+`hr`} {min+`min`} {sec+`s`}</span> :<span onClick={handleClickOnTimer}>
            
                {Time_2(timer)}
            
            </span>}</span>
            
           <Input ref={inputRef} type="text"  onChange={handleChange}/> 
            
            <div className={styleSheet.btn_div}>
                <button onClick={handleTimer}  style={isRunning ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white",color:"black"}}>{isRunning ? 'Stop' :'Start'}</button>
                <button onClick={handleReset} >Reset</button>
            </div>
        </div>
    )
}

export {Timer}


