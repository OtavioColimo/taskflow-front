import { useState, useEffect, useCallback } from "react";
import { tasksService } from "../services/tasks.service";

export function useTasks() {
  const [tasks, setTasks]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await tasksService.getAll();
      setTasks(data);
    } catch {
      setError("Não foi possível carregar as tarefas. Verifique a API.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const deleteTask = useCallback(async (id) => {
    await tasksService.remove(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const completeTask = useCallback(async (id) => {
    const updated = await tasksService.complete(id);
    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
  }, []);

  return { tasks, loading, error, reload: load, deleteTask, completeTask };
}
