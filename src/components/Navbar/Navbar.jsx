import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>◈</span>
          <span>TaskFlow</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}>
            Tarefas
          </Link>
          <Link to="/tasks/new" className={styles.cta}>
            + Nova tarefa
          </Link>
        </nav>
      </div>
    </header>
  );
}
