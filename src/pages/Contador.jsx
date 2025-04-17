import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../context/LanguajeContext";

export default function Contador(){
    const {t} = useContext(LanguageContext);

    const [count, setCount] = useState(() =>{
        const saveCount = localStorage.getItem("count");
        return saveCount ? JSON.parse(saveCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count])

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    return (
        <>
        <h1 className="mt-20 text-5xl font-bold text-zinc-900"> 🔢 {t.counter}</h1>
        <h2 
        className="text-4xl font-bold mt-5">{count}</h2>
        <button
        className="block m-auto p-4 bg-blue-100  rounded-lg hover:bg-green-200 w-48 transition mt-10"onClick={() => increment()}>{t.increment}</button>
        <button 
        className="block m-auto p-4 bg-green-100  rounded-lg hover:bg-green-200 w-48 transition -mt-24" onClick={() => decrement()}>{t.decrement}</button>
        <button 
        className="block m-auto p-4 bg-purple-100 rounded-lg hover:bg-green-200 w-48 transition -mt-24"  onClick={() => reset()}>{t.reset}</button>
        </>

    )
}