import { ChevronRightIcon, Trash2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks(props) {
    const navgate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navgate(`/details_task?${query.toString()}`);
    }

    return (
        <ul className="space-y-3 p-6 bg-slate-500 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskCheck(task.id)} 
                    className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                        </button>
                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                    <ChevronRightIcon />
                    </button>
                    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                    <Trash2Icon />
                    </button>
                    </li>
                ))}
        </ul>
    )
}

export default Tasks