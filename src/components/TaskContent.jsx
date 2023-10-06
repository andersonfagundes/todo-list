import styles from './TaskContent.module.css';
import clipboard from '../assets/Clipboard.svg';
import { TaskCreated } from './TaskCreated';

export function TaskContent({ tasks, onDeleteTask, isCompletedTask }) {
  return (
    <section>
      {tasks.length === 0 ? (
        <div className={styles.noTask}>
          <img src={clipboard} />
          <p>You don't have tasks registered yet</p>
          <p>Create tasks and organize your items</p>
        </div>
      ) : (
        <div className={styles.allTask}>
          {tasks.map((task) => {
            return (
              <TaskCreated
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                isCompletedTask={isCompletedTask}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
