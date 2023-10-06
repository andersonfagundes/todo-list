import { TaskContent } from './TaskContent';
import { TaskHeader } from './TaskHeader';

export function Task({
  tasks,
  onDeleteTask,
  isCompletedTask,
  totalCompletedTask,
}) {
  return (
    <>
      <TaskHeader tasks={tasks} totalCompletedTask={totalCompletedTask} />
      <TaskContent
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        isCompletedTask={isCompletedTask}
      />
    </>
  );
}
