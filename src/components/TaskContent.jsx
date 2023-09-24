import styles from './TaskContent.module.css';
import clipboard from '../assets/Clipboard.svg';

export function TaskContent() {
  return (
    <section>
      <div className={styles.allTask}>
        <img src={clipboard} />
        <p>You don't have tasks registered yet</p>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </section>
  );
}
