
import Navbar from "./navbar";
import { useState } from "react";
export default function LogicExpress(){
    const [value, Setvalue] = useState("")

    

    if (value == "Jason"){
        return(
             <div>
           <Navbar/>
        </div>
        )
       
    }
    else{
        return(
            <div>
                <button className="btn btn-primary" onClick={() => {Setvalue("Jason")}}> Click Me to open </button>
            <h1> Name is unknown</h1>
        </div>
        )
        
    }
    
  
   
}