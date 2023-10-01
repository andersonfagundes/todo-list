import styles from './TaskHeader.module.css';

export function TaskHeader() {
  return (
    <section>
      <div className={styles.task}>
        <div className={styles.createdTask}>
          Created tasks <span>0</span>
        </div>
        <div className={styles.completedTask}>
          Completed<span>2 de 5</span>
        </div>
      </div>
    </section>
  );
}
