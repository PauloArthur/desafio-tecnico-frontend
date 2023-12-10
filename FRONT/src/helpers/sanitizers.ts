import DOMPurify from 'dompurify';
import { type Task, type NewTask } from '../types/Board';

export const sanitize = (dirty: string): string => DOMPurify.sanitize(dirty);

export const sanitizeNewTask = (task: NewTask): NewTask => ({
  lista: 'ToDo',
  titulo: sanitize(task.titulo),
  conteudo: sanitize(task.conteudo),
});

export const sanitizeTask = (task: Task): Task => ({
  ...task,
  titulo: sanitize(task.titulo),
  conteudo: sanitize(task.conteudo),
});
