interface Myprops {
    brand : string,
    isGoal : boolean,
}

export default function Car(props:Myprops){
    return(
        <div>
            { props.brand &&  <h1> My car is a {props.brand}!</h1>}

            { props.isGoal ? <h1>It is a goal </h1> : <h1>No goal </h1>}
        </div>
    )

}