import { Undo2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";
import Input from "../components/Input.jsx";
import H1 from "../components/H1.jsx";
import TitleMain from "../components/TitleMain.jsx";

function UpdateTask() {
    const navigate = useNavigate();

    const location  = useLocation();
    const params = new URLSearchParams(location.search);
    const task = JSON.parse(params.get("data"));

    const [titleInput, setTitle] = useState("");
    const [descriptionInput, setDescription] = useState("");

    return <div className="w-screen h-screen bg-slate-700 p-6 flex justify-center">
        <div className="w-[30%] space-y-4">
            <div className="flex justify-center relative mb-6">
                <TitleMain>Update Task</TitleMain>

                <button onClick={() => navigate(-1)} className="bg-slate-400 rounded-md text-white p-1 absolute top-0 right-0">
                    <Undo2 />
                </button>
            </div>

            <div className="bg-slate-500 flex flex-col p-6 rounded-md space-y-3">
                <H1>Title: {task.title}</H1>
                <Input type="text" placeholder="Write the modification: " value={titleInput} onChange={(e) => setTitle(e.target.value)}/>
                <H1>Description: {task.description}</H1>
                <Input type="text" placeholder="Write the modification: " value={descriptionInput} onChange={(e) => setDescription(e.target.value)}/>
                <button onClick={() => {

                    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
                    const updateTasks = storedTasks.map(t => {

                        if (t.id === task.id) {
                            return { ...t, title: titleInput || t.title, description: descriptionInput || t.description } 
                        }

                        return t;
                    });
                    localStorage.setItem("tasks",JSON.stringify(updateTasks));
                    
                    setTitle("");
                    setDescription("");

                    navigate(-1);
                }} 
                className="bg-slate-700 text-white p-1 rounded-md">Update
                </button>
            </div>
        </div>
    </div>
};

export default UpdateTask;