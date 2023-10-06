import styles from './TaskHeader.module.css';

export function TaskHeader({ tasks, totalCompletedTask }) {
  // const justCreatedTasks = tasks.filter((task) => task.status === 0);

  return (
    <section>
      <div className={styles.task}>
        <div className={styles.createdTask}>
          Created tasks <span>{tasks.length}</span>
        </div>
        <div className={styles.completedTask}>
          Completed
          <span>{`${totalCompletedTask} of ${tasks.length}`}</span>
        </div>
      </div>
    </section>
  );
}
