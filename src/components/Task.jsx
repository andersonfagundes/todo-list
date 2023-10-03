import { TaskContent } from './TaskContent';
import { TaskHeader } from './TaskHeader';

export function Task({ tasks }) {
  return (
    <>
      <TaskHeader tasks={tasks} />
      <TaskContent tasks={tasks} />
    </>
  );
}
