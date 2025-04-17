import useResponse from "./hooks/useResponse";
import useClima from "./hooks/useClima";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguajeContext";


export default function Clima(){
    const {t} = useContext(LanguageContext);
    const {newLocation, updateLocation, error} = useResponse();
    const {getWeatherInfo, location} = useClima();

    const handleSubmit = (e) =>{
        e.preventDefault();
        getWeatherInfo(newLocation);
    }

    const handleChange = (e) =>{
        const newSearch = e.target.value;
        updateLocation(newSearch);
    }

    return(
        <>
        <header className="mt-20 text-center">
            <h1 className="text-5xl font-bold text-zinc-900"> ⛅ {t.weatherApp}</h1>
        </header>
        <section className="mt-10 flex flex-col items-center" >
            <form className="w-full max-w-md flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                <h2 className="font-semibold text-lg text-zinc-800">{t.country}:</h2>
                <input type="text"
                value={newLocation}
                className="max-w-md px-4 mt-4 py-2 border border-gray-300 rounded-lg shadow-sm 
                focus:outline-none focus:ring-1 focus:ring-blue-400 
              focus:border-blue-400 transition duration-300 "
                onChange={handleChange}
                placeholder="Argentina, New York..." />
                <button className="bg-blue-100 ml-2 hover:bg-blue-200 p-3 rounded-2xl" type="submit">{t.search}</button>
            </form>
            {location &&
            <div className="mt-6 w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-3 text-zinc-800">
                <div className="flex justify-between">
                <span className="font-semibold">{t.temperature}:</span>
                <span>{location.temp} °C</span>
                </div>
                <div className="flex justify-between">
            <span className="font-semibold">{t.feelsLike}:</span>
            <span>{location.feels_like} °C</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{t.maxTemp}:</span>
            <span>{location.tempMax} °C</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{t.humidity}:</span>
            <span>{location.humidity}%</span>
            </div>
            </div>            
            }
            {error  && <p className="text-red-500 mt-4 font-medium">{error}</p>}
        </section>
        </>
    )
}