import { useState } from "react"

export default function Choice(){
    const [color, setColor] = useState<string>("red");
    
    
    return(
        <div >
        <h1 className={`text-6xl  text-center p-4`} 
         style={{
            color: `${color}`
         }}
        >My favourite color is {color}</h1>
        <div style={{
            width:"200px",
            height:"200px",
            backgroundColor: `${color}`
        }}></div>
        <button className="btn btn-primary" onClick={() => setColor("blue")}>Blue</button>
        <button className="btn btn-success" onClick={() => setColor("green")}>Green</button>
        <button className="btn btn-accent bg-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="btn btn-warning" onClick={() => setColor("red")}>Red</button>
        <button className="btn btn-info bg-pink-700" onClick={() => setColor("pink")}>Pink</button>
        </div>
    )
}