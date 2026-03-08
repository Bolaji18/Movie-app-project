import React, {useState, useEffect} from "react";
interface UserProfile{
    name: string;
    details: string;
}

interface ItemResponse{
   items: UserProfile[];
}

const GetItems: React.FC = () => {
    const [items, setItems] = useState<UserProfile[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            try{
                const response = await fetch("http://127.0.0.1:5000/items");
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: ItemResponse = await response.json();
                setItems(data.items);
            }
            catch (err:any){
                setError(err.message);
            }
            finally{
                setIsLoading(false);
            }

        }
        fetchItems();
    }, []);

    if (isLoading){ 
        return <div>Loading...</div>;
    }
    if (error){
        return <div>Error: {error}</div>;
    }

    return(
        <div className="text-2xl font-sans text-blue-500 text-center">
            <h1 className="text-4xl font-bold mb-4">User Profiles</h1>
            {
                items?.map((item, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold">{item.name}</h2>
                        <p>{item.details}</p>
                    </div>
                ))
            }

        </div>
    )

}

export default GetItems;