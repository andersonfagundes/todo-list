import styles from './TaskCreated.module.css';
import trash from '../assets/trash.svg';

export function TaskCreated({ task, onDeleteTask }) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <article>
      <input type="radio" />
      <label>{task.content}</label>
      <img src={trash} onClick={handleDeleteTask} />
    </article>
  );
}
