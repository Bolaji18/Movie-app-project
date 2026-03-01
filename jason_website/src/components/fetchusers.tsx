import { useState, useEffect } from "react";

interface items{
    id: number;
    details: string;
    name: string;
}

export default function FetchUsers() {
    const [items, setItems] = useState<items[]>([]);
    const [loadings, setLoadings] = useState(true);
    const [errors, setErrors] = useState<string | null>(null);

    useEffect(
        ()=> {
            const fetchItems = async () => {
                try{
                    const response = await fetch("http://127.0.0.1:5000/items");
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const result: { items: items[] } = await response.json();
                    setItems(result.items);
                }
                catch (error: any) {
                    setErrors(error.message);
                }
                finally{
                    setLoadings(false);
                }
            }
            fetchItems();
            console.log(items);
        }, 
        []
    )

    if(loadings){
        return (
            <div> Page is loading... </div>
        )
    }
    if (errors){
        return (
            <div>
                Error occured because: {errors}
            </div>
        )
    }

    return(
        <div>
            <h1>Items</h1>
            <h2>List of items</h2>
            <h3>
                {
                    items.map(item => {
                        return(
                            <div key={item.id}>
                                {item.id}: {item.name} - {item.details}
                            </div>
                        )
                    })
                }
            </h3>
            

        </div>
    )
}