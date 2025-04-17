import { Link } from "react-router-dom";
import "../index.css"
import { useContext } from "react";
import { LanguageContext } from "../context/LanguajeContext";

export default function Home() {
  const {t, toggleLanguage} = useContext(LanguageContext);

  return (
    <main className="w-full bg-gradient-animated items-center justify-center font-black font-sans">
      <h1 className="text-4xl mt-5 justify-center m-auto flex text-zinc-900">{t.greeting}</h1>
      <p className="mt-2.5 font-bold text-zinc-900">{t.select}</p>

      <div className="relative top-6 font-bold">
        <Link to="/clima" className="block justify-center m-auto p-4 bg-blue-100 rounded-lg hover:bg-blue-200 w-96 transition mt-3">⛅ {t.weatherApp}</Link>
        <Link to="/contador" className="block justify-center m-auto p-4 bg-green-100 rounded-lg hover:bg-green-200 w-96  transition mt-3">🔢 {t.counter}</Link>
        <Link to="/lista" className="block p-4 justify-center m-auto bg-purple-100 rounded-lg hover:bg-purple-200 w-96 transition mt-3">🕒 {t.todo}</Link>
      </div>
      <button onClick={toggleLanguage} className="mt-12 px-4 py-2 bg-zinc-80 rounded hover:bg-zinc-700 transition text-black">
        {t.btnText}
      </button>
    </main>
  );
}
