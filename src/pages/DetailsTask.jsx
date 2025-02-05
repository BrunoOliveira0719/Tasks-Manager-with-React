import { Undo2 } from "lucide-react";
import H1 from "../components/H1";
import { useNavigate, useSearchParams } from "react-router-dom"
import TitleMain from "../components/TitleMain";

function DetailsTask() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return <div className="w-screen h-screen bg-slate-700 p-6 flex justify-center">
        <div className="w-[30%] space-y-4">
            <div className="flex justify-center relative mb-6">
                <TitleMain>Details Task</TitleMain>

                <button onClick={() => navigate(-1)} className="bg-slate-400 rounded-md text-white p-1 absolute top-0 right-0">
                    <Undo2 />
                </button>
            </div>

            <div className="bg-slate-500 flex flex-col p-6 rounded-md">
                <H1>Title: {title}</H1>
                <p className="font-bold my-2 text-white">Description: {description}</p>
            </div>
        </div>
    </div>
};

export default DetailsTask