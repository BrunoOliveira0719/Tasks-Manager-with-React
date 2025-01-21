import { useState } from "react";
import Input from "./input";

function CreateTasks(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-3 p-6 bg-slate-500 rounded-md shadow flex flex-col">
            <Input type="text" placeholder="Write a title for a new task" value={title} 
            onChange={(e) => setTitle(e.target.value)}
            />
            <Input type="text" placeholder="Write a description of the task" value={description} 
            onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={() => {
                if (!title.trim()) {
                    return alert("Fill in the title");
                } else if (!description.trim()) {
                    return alert("Fill in the description!");
                };  
                props.onCreateTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }} 
            className="bg-slate-700 text-white p-1 rounded-md">Create
            </button>
        </div>
    );
}

export default CreateTasks;