import { createContext, useEffect, useState } from "react";
import { translation } from "../translations/language";

export const LanguageContext = createContext();

export function LenguageProvider ({children}) {
    const [language, setLanguage] = useState(() =>{
        const saveData = localStorage.getItem("setLanguage")
        return saveData ? saveData : "en";
    });

    useEffect(() =>{
        localStorage.setItem("setLanguage", language)
    },[language])

    const toggleLanguage = () =>{
        setLanguage((prev) => prev === "en" ? "es" : "en");
    }


    const t = translation[language];

    return(
        <LanguageContext.Provider value={{language, toggleLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    )
}