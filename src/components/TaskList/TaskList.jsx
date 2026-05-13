import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks, onComplete, onDelete }) {
  const pending   = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  if (tasks.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>◈</span>
        <p>Nenhuma tarefa ainda.</p>
        <small>Crie sua primeira tarefa usando o botão acima.</small>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {pending.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>
            Pendentes <span className={styles.badge}>{pending.length}</span>
          </h2>
          <ul className={styles.list}>
            {pending.map((t) => (
              <li key={t.id}>
                <TaskCard task={t} onComplete={onComplete} onDelete={onDelete} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {completed.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>
            Concluídas <span className={styles.badge}>{completed.length}</span>
          </h2>
          <ul className={styles.list}>
            {completed.map((t) => (
              <li key={t.id}>
                <TaskCard task={t} onComplete={onComplete} onDelete={onDelete} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
