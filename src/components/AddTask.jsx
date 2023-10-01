import styles from './AddTask.module.css';
import plus from '../assets/plus.svg';

export function AddTask() {
  function handleCreateNewTask() {
    event.preventDefault();
  }

  return (
    <div className={styles.addTask}>
      <form onSubmit={handleCreateNewTask}>
        <input type="text" placeholder="Add a new task" />
        <button>
          <span>Add</span>
          <img src={plus} />
        </button>
      </form>
    </div>
  );
}
