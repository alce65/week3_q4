import { Task } from '../model/task';

export const repo = () => {
  const data: Task[] = [
    { id: crypto.randomUUID(), name: '', owner: '', isCompleted: false },
  ];
  return data;
};
