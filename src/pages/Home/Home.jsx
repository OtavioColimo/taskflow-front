import { Link } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import TaskList from "../../components/TaskList/TaskList";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./Home.module.css";

export default function Home() {
  const { tasks, loading, error, reload, deleteTask, completeTask } = useTasks();

  const pendingCount   = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className={`container page-enter ${styles.page}`}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Minhas tarefas</h1>
          {!loading && !error && (
            <p className={styles.subtitle}>
              {pendingCount} pendente{pendingCount !== 1 ? "s" : ""} &middot; {completedCount} concluída{completedCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>
        <Link to="/tasks/new" className={styles.newBtn}>+ Nova</Link>
      </div>

      {loading && <Loading message="Buscando tarefas..." />}
      {error   && <ErrorMessage message={error} onRetry={reload} />}
      {!loading && !error && (
        <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
      )}
    </div>
  );
}
