import { tasksService } from "../../services/tasks.service";
import TaskForm from "../../components/TaskForm/TaskForm";
import styles from "./CreateTask.module.css";

export default function CreateTask() {
  return (
    <div className={`container page-enter ${styles.page}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Nova tarefa</span>
        <h1 className={styles.title}>O que precisa ser feito?</h1>
      </div>

      <div className={styles.card}>
        <TaskForm onSubmit={tasksService.create} submitLabel="Criar tarefa" />
      </div>
    </div>
  );
}
