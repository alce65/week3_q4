import { Task } from '../model/task';

const storeName = 'Tasks';

export const setTasks = (tasks: Task[]) => {
  localStorage.setItem(storeName, JSON.stringify(tasks));
};

export const getTasks = (): Task[] => {
  const initialTasks: Task[] = [
    {
      id: crypto.randomUUID(),
      name: 'Desayunar',
      owner: 'Todos',
      isCompleted: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Aprender React',
      owner: 'Nitin',
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Aprender Angular',
      owner: 'Juan',
      isCompleted: false,
    },
  ];

  const tasksText = localStorage.getItem(storeName);
  if (!tasksText) {
    setTasks(initialTasks);
    return initialTasks;
  }

  const tasks = JSON.parse(tasksText);
  return tasks;
};

export const removeTasks = () => {
  localStorage.removeItem(storeName);
};
