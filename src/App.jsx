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

  return (
    <>
      <Header />
      <AddTask addTask={addTask} />
      <Task tasks={arrayTasks} />
    </>
  );
}

export default App;
