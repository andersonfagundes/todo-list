import styles from './AddTask.module.css';
import plus from '../assets/plus.svg';

export function AddTask({ addTask }) {
  function handleNewTask(event) {
    event.preventDefault();

    const newTask = event.target.task.value;

    const arrayNewTask = {
      id: Math.floor(Math.random() * 900) + 100,
      content: newTask,
    };

    addTask(arrayNewTask);
    console.log(arrayNewTask);
    event.target.task.value = '';
  }

  return (
    <div className={styles.addTask}>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          name="task"
          autoFocus
          required
          placeholder="Add a new task"
        />
        <button type="submit">
          <span>Add</span>
          <img src={plus} />
        </button>
      </form>
    </div>
  );
}
