import { useState, useEffect } from "react";
import FetchUsers from "./fetchusers";
interface User{
    id: number;
    name: string;
}



export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try { 
                const response = await fetch("http://127.0.0.1:5000/api/users")
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result: User[] = await response.json();
                setUsers(result); 
            }
            catch (error: any) {
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        };
        fetchUsers();
    }, [])

    if(loading){
        return (
            <div>
                Page is loading...
            </div>
        )
    }
    if (error){
        return (
            <div>
                Error occured because: {error}
            </div>
        )
    }

    return (
        <div>
            <h1>Users </h1>
            <h2>List of users:</h2>
            <h3>
                {
                    users.map(user => {
                        return(
                            <div key={user.id}>
                                {user.id}: {user.name}
                            </div>
                        )
                    })
                }
            </h3>
            <FetchUsers />
            
        </div>
    )


}

