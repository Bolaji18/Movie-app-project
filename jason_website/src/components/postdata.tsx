import React, {useState, ChangeEvent, FormEvent} from "react";

interface UserProfile{
    username: string;
    details: string;
}


// async function fetchUserProfile(url: string, data: UserProfile): Promise<void> {
//     try{
//         const response = await fetch(url, {
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();
//         console.log("User profile created successfully:", result);
//     } catch (error) {
//         console.error("Error fetching user profile:", error);
//     }
// }


const PostData:React.FC =() => {

    const [formData, setFormData] = useState<UserProfile>({
        username:"",
        details:""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const response = await fetch ("http://127.0.0.1:5000/items", {
                method :'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                alert("Data posted successfully!");
            }
          
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    required
                    className="input input-accent"
                />
            </div>
            <div>
                <label htmlFor="details">Details:</label>
                <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Enter details"
                    required
                    className="textarea textarea-accent"
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default PostData;