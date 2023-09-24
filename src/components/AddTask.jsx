import styles from './AddTask.module.css';
import plus from '../assets/plus.svg';

export function AddTask() {
  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Add a new task"
          className={styles.task}
        />
        <button>
          <span>Add</span>
          <img src={plus} />
        </button>
      </form>
    </section>
  );
}
