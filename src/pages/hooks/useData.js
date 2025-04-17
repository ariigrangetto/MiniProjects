import { useEffect, useState } from "react";

export default function useData() {
  const [task, setTask] = useState(() => {
    const saveDataTask = localStorage.getItem("saveTask");
    return saveDataTask ? JSON.parse(saveDataTask) : [];
  });

  useEffect(() => {
    localStorage.setItem("saveTask", JSON.stringify(task));
  }, [task]);

  return { task, setTask };
}
