import styles from './TaskHeader.module.css';

export function TaskHeader({ tasks }) {
  return (
    <section>
      <div className={styles.task}>
        <div className={styles.createdTask}>
          Created tasks <span>{tasks.length}</span>
        </div>
        <div className={styles.completedTask}>
          Completed<span>2 de 5</span>
        </div>
      </div>
    </section>
  );
}
