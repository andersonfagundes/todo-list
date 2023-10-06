import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import './global.css';
import { Task } from './components/Task';
import { useEffect, useState } from 'react';

function App() {
  const [arrayTasks, setArrayTasks] = useState([]);
  const [totalCompletedTask, setTotalCompletedTask] = useState(0);

  const addTask = (newTask) => {
    setArrayTasks([...arrayTasks, newTask]);
  };

  function handleCompletedTask(isCompletedTask) {
    if (isCompletedTask == true) {
      setTotalCompletedTask(totalCompletedTask + 1);
    } else {
      setTotalCompletedTask(totalCompletedTask - 1);
    }
  }

  useEffect(() => {
    console.log(totalCompletedTask);
  }, [totalCompletedTask]);

  function handleDeleteTask(taskToDelete) {
    const updatedTasks = arrayTasks.filter(
      (task) => task.id !== taskToDelete.id,
    );
    setArrayTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <AddTask addTask={addTask} />
      <Task
        tasks={arrayTasks}
        totalCompletedTask={totalCompletedTask}
        onDeleteTask={handleDeleteTask}
        isCompletedTask={handleCompletedTask}
      />
    </>
  );
}

export default App;
