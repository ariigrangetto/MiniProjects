import { useRef, useState } from "react";
import KEY from "../../../endpoint";

const API_KEY = KEY;

export default function useClima() {
  const [location, setLocation] = useState("");
  const previousCity = useRef(location);

  function getWeatherInfo(newLocation) {
    const trimmed = newLocation.trim();
    if (previousCity.current === trimmed) return;
    if (trimmed === "") return;
    previousCity.current = trimmed;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${trimmed}&units=metric&appid=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const weather = {
          name: data.name,
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          tempMax: data.main.temp_max,
          humidity: data.main.humidity,
        };
        setLocation(weather);
      });
  }

  return { getWeatherInfo, location };
}

//no se puede utilizar un useEffect dentro de una funcion
