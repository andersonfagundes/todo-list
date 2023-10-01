import styles from './TaskCreated.module.css';
import trash from '../assets/trash.svg';

export function TaskCreated() {
  return (
    <article>
      <input type="radio" name="d" value="1" />
      <label>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </label>
      <img src={trash} />
    </article>
  );
}
