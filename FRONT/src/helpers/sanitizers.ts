import DOMPurify from 'dompurify';
import { type Task, type NewTask } from '../types/Board';

export const sanitizeToString = (dirty: string): string =>
  DOMPurify.sanitize(dirty, { RETURN_DOM: false });

export const sanitizeToMarkdown = (dirty: string): string =>
  DOMPurify.sanitize(dirty);

export const sanitizeNewTask = (task: NewTask): NewTask => ({
  lista: 'ToDo',
  titulo: sanitizeToString(task.titulo),
  conteudo: sanitizeToMarkdown(task.conteudo),
});

export const sanitizeTask = (task: Task): Task => ({
  ...task,
  titulo: sanitizeToString(task.titulo),
  conteudo: sanitizeToMarkdown(task.conteudo),
});
