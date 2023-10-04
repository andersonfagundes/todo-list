import styles from './TaskCreated.module.css';
import trash from '../assets/trash.svg';
import React, { useState } from 'react';

export function TaskCreated({ task, onDeleteTask }) {
  const [isRadioChecked, setIsRadioChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleCheckTask(event) {
    const isChecked = event.target.checked;
    setIsRadioChecked(isChecked);
  }

  const labelStyle = isRadioChecked ? { textDecoration: 'line-through' } : {};

  return (
    <article>
      <input
        type="radio"
        name="taskStatus"
        className={styles.checkedTask}
        onClick={handleCheckTask}
      />
      <label style={labelStyle}>{task.content}</label>
      <img src={trash} onClick={handleDeleteTask} />
    </article>
  );
}
