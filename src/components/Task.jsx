import { TaskContent } from './TaskContent';
import { TaskHeader } from './TaskHeader';

export function Task({ totalCreatedTasks }) {
  return (
    <>
      <TaskHeader totalCreatedTasks={totalCreatedTasks} />
      <TaskContent />
    </>
  );
}
