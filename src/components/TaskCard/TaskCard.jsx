import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import styles from "./TaskCard.module.css";

export default function TaskCard({ task, onComplete, onDelete }) {
  const navigate = useNavigate();

  function handleComplete(e) {
    e.stopPropagation();
    if (!task.completed) onComplete(task.id);
  }

  function handleDelete(e) {
    e.stopPropagation();
    if (window.confirm(`Excluir "${task.title}"?`)) onDelete(task.id);
  }

  return (
    <article
      className={`${styles.card} ${task.completed ? styles.done : ""}`}
      onClick={() => !task.completed && navigate(`/tasks/${task.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && !task.completed && navigate(`/tasks/${task.id}`)}
    >
      <div className={styles.left}>
        <button
          className={`${styles.check} ${task.completed ? styles.checked : ""}`}
          onClick={handleComplete}
          aria-label="Marcar como concluída"
          title="Marcar como concluída"
        >
          {task.completed && <span className={styles.checkIcon}>✓</span>}
        </button>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{task.title}</h3>
        {task.description && (
          <p className={styles.desc}>{task.description}</p>
        )}
        <time className={styles.date}>{formatDate(task.createdAt)}</time>
      </div>

      <div className={styles.actions}>
        {!task.completed && (
          <button
            className={styles.editBtn}
            onClick={(e) => { e.stopPropagation(); navigate(`/tasks/${task.id}`); }}
            aria-label="Editar tarefa"
          >
            ✎
          </button>
        )}
        <button
          className={styles.deleteBtn}
          onClick={handleDelete}
          aria-label="Excluir tarefa"
        >
          ✕
        </button>
      </div>
    </article>
  );
}
