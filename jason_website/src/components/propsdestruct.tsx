function Car(props:any){
    const {brand, model} = props;

    return(
        <h2>i love my {brand} {model}</h2>
    )
}

export function Cars2({color, brand, ...rest}: {color: string, brand: string, [key: string]: any}){
    return(
        <h2> My {brand} is {rest.model} and it is {color}</h2>
    )

}

export default function PropsDestruct(){
    return(
        <>
        <Car brand='Ford' model='Mustang' color='red' year={2020}/>
        <Cars2 brand='Toyota' model='Camry' color='blue' year={2021}/>
        </>
    )
}