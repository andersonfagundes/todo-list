import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import './global.css';
import { Task } from './components/Task';
import { useState } from 'react';

function App() {
  const [arrayTasks, setArrayTasks] = useState([]);

  const addTask = (newTask) => {
    setArrayTasks([...arrayTasks, newTask]);
  };

  function updateStatusTask(updatedStatusTask) {}

  function handleDeleteTask(taskToDelete) {
    const updatedTasks = arrayTasks.filter(
      (task) => task.id !== taskToDelete.id,
    );
    setArrayTasks(updatedTasks);
  }
  console.log(arrayTasks);
  return (
    <>
      <Header />
      <AddTask addTask={addTask} />
      <Task
        tasks={arrayTasks}
        onUpdateStatusTask={updateStatusTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
