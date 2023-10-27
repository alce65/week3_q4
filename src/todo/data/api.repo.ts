import { Task } from '../model/task';

const tasksApiUrl = 'http://localhost:3000/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(tasksApiUrl);
  return response.json();
};

export const createTask = async (newTask: Partial<Task>): Promise<Task> => {
  const response = await fetch(tasksApiUrl, {
    method: 'POST',
    body: JSON.stringify(newTask),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
