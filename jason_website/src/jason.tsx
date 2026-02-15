import "./jason.css"
function Jason(){
    const x = 200;
    let y = "John";
    if ( x < 100){
        y = "Johnson";
    }
    return(
        <>
        <h1>{y}</h1>
        <h1>{ x < 100 ? "BMW" : "Mercedes"}</h1>
        <h1 className="myh1">This is jason file </h1>
        <h2 className="up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam voluptatem ipsum officiis consequuntur exercitationem id iste fugit. Provident ullam cum quam ad, accusantium magnam earum at soluta ducimus saepe?</h2>
        </>
    )
}

export default Jason