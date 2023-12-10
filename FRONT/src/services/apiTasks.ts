import { type NewTask, type Task } from '../types/Board';
import api from './api';

type ResponseType<T> = Promise<T | never>;

const loadTasks = async (): ResponseType<Task[]> => {
  try {
    const response = await api.get<Task[]>(`cards`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao carregar as tarefas');
  }
};

const createTask = async (task: NewTask): ResponseType<Task> => {
  try {
    const response = await api.post(`cards`, { task });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao criar a tarefa');
  }
};

const deleteTask = async (taskId: number) => {
  try {
    const response = await api.delete(`cards/${taskId}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (task: Task) => {
  try {
    const response = (await api.put(`cards/${task.id}`), task);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { loadTasks1, loadTasks, createTask, deleteTask, updateTask };
