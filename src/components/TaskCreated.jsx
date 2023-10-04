import styles from './TaskCreated.module.css';
import trash from '../assets/trash.svg';
import React, { useState } from 'react';

export function TaskCreated({ task, onDeleteTask }) {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleCheckTask(event) {
    setIsCheckBoxChecked(false);

    const isChecked = event.target.checked;
    if (isChecked) {
      setIsCheckBoxChecked(isChecked);
    }

    // Crie uma cópia da tarefa com o status atualizado
    // const updatedTask = { ...task, status: 1 };

    // Chame uma função para atualizar a tarefa no componente pai
    // Por exemplo, passando a tarefa atualizada para uma função onUpdateTask
    // onUpdateStatusTask(updatedTask);
  }

  const labelStyle = isCheckBoxChecked
    ? { textDecoration: 'line-through' }
    : {};

  return (
    <article>
      <input
        type="checkbox"
        name="taskStatus"
        className={styles.checkedTask}
        onClick={handleCheckTask}
      />
      <label style={labelStyle}>{task.content}</label>
      <img src={trash} onClick={handleDeleteTask} />
    </article>
  );
}
