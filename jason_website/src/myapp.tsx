import {useState} from "react";

export default function Counter(){

    const [count, setCount] = useState(0);

    return(
        <div>
            <p style={{
                color:"blue",
                width:"100%",
                textAlign:"center",
                fontSize:"24px"
            }}>You clicked {count} times</p>
            <div style={{
                margin:"auto",
                marginLeft:'30%'
            }}>
            <button className="btn btn-success" onClick={() => setCount(count+1)}>
                Increase +
            </button>
            <button className="btn btn-error" onClick={() => setCount(count -1)}>
                Decrease -
            </button>
            </div>

        </div>
    )
}