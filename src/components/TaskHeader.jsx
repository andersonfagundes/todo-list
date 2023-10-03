import styles from './TaskHeader.module.css';

export function TaskHeader({ totalCreatedTasks }) {
  return (
    <section>
      <div className={styles.task}>
        <div className={styles.createdTask}>
          Created tasks <span>{totalCreatedTasks}</span>
        </div>
        <div className={styles.completedTask}>
          Completed<span>2 de 5</span>
        </div>
      </div>
    </section>
  );
}
