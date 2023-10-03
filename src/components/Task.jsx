import { TaskContent } from './TaskContent';
import { TaskHeader } from './TaskHeader';

export function Task({ tasks, onDeleteTask }) {
  return (
    <>
      <TaskHeader tasks={tasks} />
      <TaskContent tasks={tasks} onDeleteTask={onDeleteTask} />
    </>
  );
}
