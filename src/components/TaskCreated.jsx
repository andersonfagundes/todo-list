import styles from './TaskCreated.module.css';
import trash from '../assets/trash.svg';

export function TaskCreated({ content }) {
  return (
    <article>
      <input type="radio" />
      <label>{content}</label>
      <img src={trash} />
    </article>
  );
}
