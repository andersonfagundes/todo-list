import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import './global.css';
import { Task } from './components/Task';

function App() {
  return (
    <>
      <Header />
      <AddTask />
      <Task />
    </>
  );
}

export default App;
