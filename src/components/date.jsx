import { useState } from "react";

function DateCounter(){
    const [step , setStep] = useState(0)
    const [count , setCount] = useState(0)
    const currentDate = new Date ();
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
    const  days = ["MONDAY","TUESDAY","THURSDAY","WEDNESDAY","FRIDAY","SATURDAY","SUNDAY"] 
    const dayOfWeek = days[currentDate.getDate()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth =currentDate.getdate();
    const tear = currentDate.getFullYear()
    const formattedData = `today is ${dayOfWeek} ${}`
    




function stepInc(){
        console.log("==>> STEP IS WORKING");
}

function stepDec(){
    console.log("==>> STEP IS WORKING");
}


function countInc(){
        console.log("==>> STEP IS WORKING");
}


function countDec(){
        console.log("==>> STEP IS WORKING");
}


return (
    <>
    <div style={{background: "black",width :"600px" , margin:"100px auto" , display:"flex" , justifyContent:"center", alignItems :"center", flexDirection: "column"}}>


    <div style={{background: "purple",width :"50%" , margin:"100px auto" , display:"flex" , justifyContent:"space-between", alignItems : "center"}}>
    <button onClick={stepInc} style={{height:"60px", width:"40px" ,background :"white", display: "flex" ,justifyContent:"center", alignItems : "center" }}>-</button>

    <p style={{color : "white"}}>STEP : 0</p>
    
    <button onClick={stepDec} style={{height :"60px" , width:"40px",background :"white"}}>+</button>
    </div>





    
    <div  style={{background: "blue",width :"50%" , margin:"100px auto" , display:"flex" , justifyContent:"space-between", alignItems : "center"}}>
    
    <button onClick={countInc} style={{height:"60px", width:"40px" ,background :"white"}}>-</button>
    
    <p style={{color :"white"}}>COUNT : 0</p>
    
    <button onClick={countDec}style={{height:"60px", width:"40px" ,background :"white"}}>+</button>
    </div>



    <p></p>


</div>
    </>
)





}

export default DateCounter