import styles from './TaskHeader.module.css';

export function TaskHeader() {
  return (
    <section>
      <div className={styles.task}>
        <div className={styles.createdTask}>
          <span>Created tasks</span>
        </div>
        <div className={styles.completedTask}>
          <span>Completed</span>
        </div>
      </div>
    </section>
  );
}
