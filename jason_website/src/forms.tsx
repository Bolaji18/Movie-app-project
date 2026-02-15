import { useState } from "react"
import React from "react"


export default function FormApp(){
    const [name, setName] = useState<string>("")

  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    e.preventDefault();
    }
    
    return(
        <div>
            <form>
                <label>Enter Your name: 
                <input type="text"
                value={name}
                 onChange={handleChange}
                className="input input-success"/>
                </label>
            </form>
            <h1 className="text text-primary"> The name you entered is {name}</h1>
        </div>
    )
}