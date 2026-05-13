import styles from "./Loading.module.css";

export default function Loading({ message = "Carregando..." }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.text}>{message}</p>
    </div>
  );
}
