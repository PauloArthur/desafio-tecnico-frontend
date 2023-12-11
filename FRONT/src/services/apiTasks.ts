import api from './api';
import { type AxiosResponse } from 'axios';
import { sanitizeNewTask, sanitizeTask } from '@helpers/sanitizers';

async function genericResponseHandler<T>(
  request: () => Promise<AxiosResponse<T>>,
  errorMessage: string = 'Erro ao realizar a requisição',
): Promise<T> {
  try {
    const response = await request();
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(errorMessage);
  }
}

const getTasks = async () =>
  await genericResponseHandler<Task[]>(
    async () => await api.get(`cards`),
    'Erro ao carregar as tarefas',
  );

const createTask = async (task: NewTask) =>
  await genericResponseHandler<Task>(async () => {
    const body = sanitizeNewTask(task);
    return await api.post(`cards`, body);
  }, 'Erro ao criar a tarefa');

const deleteTask = async (taskId: string) =>
  await genericResponseHandler<Task[]>(
    async () => await api.delete(`cards/${taskId}`),
    'Erro ao deletar a tarefa',
  );
const updateTask = async (task: Task) =>
  await genericResponseHandler<Task>(async () => {
    const body = sanitizeTask(task);
    return await api.put(`cards/${task.id}`, body);
  }, 'Erro ao editar a tarefa');

export default { getTasks, createTask, deleteTask, updateTask };
