interface props{
    name:string;
    age: number;
    height : number;
    address : string;
}

export default function MyProps({name, age, height, address}: props){
    return(
        <>
        <div className="james">

        <h2>My name is {name}</h2>
        <h2>I am {age} years old</h2>
        <h2> I am {height} cm tall</h2>
        <h2>I live at {address}</h2>
        </div>
       

        
        </>
    )
}