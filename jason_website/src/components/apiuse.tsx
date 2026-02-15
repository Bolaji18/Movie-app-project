import { useState, useEffect } from "react";

interface Welcome{
    message: string;
}

export default  function ApiUse() {
    const [data, setData] = useState<Welcome | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("http://127.0.0.1:5000/api/data");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result: Welcome = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, []);

    if (loading){
        return <div>Loading...</div>;
    }
    if (error){
        return <div>Error: {error}</div>;
    }

    return (
        
    <div>
        <h1>The message is:  {data?.message}</h1>

    </div>
    )
}