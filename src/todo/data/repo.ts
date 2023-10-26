import { Task } from '../model/task';

export const repo = () => {
  const data: Task[] = [
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
  return data;
};
