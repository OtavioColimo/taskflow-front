import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TaskForm.module.css";

export default function TaskForm({ initialValues = {}, onSubmit, submitLabel = "Salvar" }) {
  const navigate = useNavigate();
  const [title, setTitle]       = useState(initialValues.title || "");
  const [description, setDesc]  = useState(initialValues.description || "");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) { setError("O título é obrigatório."); return; }
    try {
      setLoading(true);
      setError("");
      await onSubmit({ title: title.trim(), description: description.trim() });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao salvar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="title">Título *</label>
        <input
          id="title"
          type="text"
          className={styles.input}
          placeholder="Ex: Revisar documentação..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          maxLength={120}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="desc">Descrição</label>
        <textarea
          id="desc"
          className={styles.textarea}
          placeholder="Detalhes opcionais sobre a tarefa..."
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          rows={4}
          maxLength={500}
        />
        <span className={styles.counter}>{description.length}/500</span>
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <div className={styles.actions}>
        <button type="button" className={styles.cancel} onClick={() => navigate("/")}>
          Cancelar
        </button>
        <button
          type="submit"
          className={styles.submit}
          disabled={loading}
        >
          {loading ? "Salvando..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
