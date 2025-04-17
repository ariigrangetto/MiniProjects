import {Link} from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguajeContext";

export default function Navbar () {
    const {t} = useContext(LanguageContext);

    return (
        <nav className='text-shadow-blue-900 top-0 sticky navLink p-4 flex gap-4 justify-center'>
        <Link className="hover:underline" to="/">{t.home || "Home"}</Link>
        <Link className="hover:underline" to="/clima">{t.weatherApp}</Link>
        <Link className="hover:underline" to="/contador">{t.counter}</Link>
        <Link className="hover:underline" to="/lista">{t.todo}</Link>
      </nav>
    )
}