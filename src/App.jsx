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

  console.log(arrayTasks);
  return (
    <>
      <Header />
      <AddTask addTask={addTask} />

      <Task />
    </>
  );
}

export default App;
