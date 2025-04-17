import { useContext, useState } from "react";
import useData from "./hooks/useData";
import { LanguageContext } from "../context/LanguajeContext";

export default function ListaDeTareas (){ 
    const {t} = useContext(LanguageContext);

    const {task, setTask} = useData()
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) =>{
        if(newTask.trim() === "") return;
        e.preventDefault();
        setTask([...task, {text: newTask, completed: false}]);
        console.log(newTask);
        setNewTask("");
    }

    const toggleTask = (index) =>{
        setTask(
            task.map((task, i) =>
            i === index ? {...task, completed: !task.completed} : task)
        )
    }

    const deleteTask = (index) =>{
        setTask(task.filter((_, i) => i !== index));
    }
    
    return (
        <>
        <h1 className="mt-20 text-4xl font-bold">{t.todo}🌸</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={newTask}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none mt-4 "
            placeholder={t.placeholderTarea} 
            onChange={(e) => setNewTask(e.target.value)}/>
            <button className="ml-4 border-gray-300 px-4 py-2 rounded-lg shadow-sm cursor-pointer">{t.add}</button>
        </form>
        <div className="mt-4 flex justify-center m-auto">
        <ul className="w-full max-w-md space-y-3 flex flex-col items-center m-auto">
            { task &&
            task.map((task, index) => (
                <li key={index} className="w-80 flex justify-between items-center gap-4 bg-white shadow-md p-4 rounded-lg">
                    <button 
                    className="px-3 py-1 rounded-lg cursor-pointer"
                    onClick={() => toggleTask(index)}>{task.completed ? "💗" : "❌"}</button>
                    <p>{task.text}</p>
                    <button className="cursor-pointer"
                    onClick={() => deleteTask(index)}>{t.delete}</button>
                </li>
            )
            )}
            
        </ul>
        </div>
        </>

    )
}