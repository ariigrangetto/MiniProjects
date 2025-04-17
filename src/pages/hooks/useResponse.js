import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../../context/LanguajeContext";

export default function useResponse() {
  const { t } = useContext(LanguageContext);
  const [newLocation, updateLocation] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = newLocation.trim() === "";
      return;
    }
    if (newLocation.trim() === "") {
      setError(`${t.firstError}`);
      return;
    }
    if (newLocation.trim().length < 3) {
      setError(`${t.secondError}`);
      return;
    }
    setError(null);
  }, [newLocation]);

  return { newLocation, updateLocation, error };
}
