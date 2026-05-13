import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tasksService } from "../../services/tasks.service";
import TaskForm from "../../components/TaskForm/TaskForm";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./EditTask.module.css";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    tasksService
      .getAll()
      .then((all) => {
        const found = all.find((t) => t.id === id);
        if (!found) { navigate("/", { replace: true }); return; }
        if (found.completed) { navigate("/", { replace: true }); return; }
        setTask(found);
      })
      .catch(() => setError("Não foi possível carregar a tarefa."))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) return <div className="container"><Loading /></div>;
  if (error)   return <div className="container"><ErrorMessage message={error} onRetry={() => navigate("/")} /></div>;

  return (
    <div className={`container page-enter ${styles.page}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Editar tarefa</span>
        <h1 className={styles.title}>Atualizar informações</h1>
      </div>

      <div className={styles.card}>
        <TaskForm
          initialValues={task}
          onSubmit={(payload) => tasksService.update(id, payload)}
          submitLabel="Salvar alterações"
        />
      </div>
    </div>
  );
}
