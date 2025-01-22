import { ChevronRightIcon, PenIcon, Trash2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./button";

function Tasks(props) {
    const navgate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navgate(`/details_task?${query.toString()}`);
    };

    function seeUpdateTaskClick(task) {
        const query = new URLSearchParams({data: JSON.stringify(task)});
        navgate(`/update_task?${query.toString()}`);
    };

    return (
        <ul className="space-y-3 p-6 bg-slate-500 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskCheck(task.id)} 
                    className={`bg-slate-400 text-black p-2 rounded-md w-full text-left ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                        </button>
                    <Button onClick={() => onSeeDetailsClick(task)}>
                    <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => seeUpdateTaskClick(task)}>
                    <PenIcon />
                    </Button>
                    <Button onClick={() => props.onDeleteTaskClick(task.id)}>
                    <Trash2Icon />
                    </Button>
                    </li>
                ))}
        </ul>
    )
}

export default Tasks