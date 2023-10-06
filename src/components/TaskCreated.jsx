import styles from './TaskCreated.module.css';
import trash from '../assets/trash.svg';
import React, { useEffect, useState } from 'react';

export function TaskCreated({ task, onDeleteTask, isCompletedTask }) {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  function handleDeleteTask(event) {
    onDeleteTask(task);

    const checkbox = event.target.parentElement.querySelector(
      'input[type="checkbox"]',
    );
    if (checkbox.checked) {
      isCompletedTask(false);
    }
  }

  function handleCheckTask(event) {
    setIsCheckBoxChecked(false);

    const isChecked = event.target.checked;
    if (isChecked) {
      setIsCheckBoxChecked(isChecked);
      isCompletedTask(true);
    } else {
      isCompletedTask(false);
    }
  }

  const labelStyle = isCheckBoxChecked
    ? { textDecoration: 'line-through' }
    : {};

  return (
    <article>
      <input type="checkbox" name="checkTask" onClick={handleCheckTask} />
      <label style={labelStyle}>{task.content}</label>
      <img src={trash} onClick={handleDeleteTask} />
    </article>
  );
}
