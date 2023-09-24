import styles from './AddTask.module.css';
import plus from '../assets/plus.svg';

export function AddTask() {
  return (
    <div className={styles.addTask}>
      <form>
        <input type="text" placeholder="Add a new task" />
        <button>
          <span>Add</span>
          <img src={plus} />
        </button>
      </form>
    </div>
  );
}
