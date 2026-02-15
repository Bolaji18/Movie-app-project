export default function ReactEvents(){
    const shoot = (a:string, b:any)=> {
        alert(b.type);
    }
    return(
        <button className="btn btn-success" onClick={(event) => shoot("Great Shot!", event)}>Take the shot!</button>
    )
    
}