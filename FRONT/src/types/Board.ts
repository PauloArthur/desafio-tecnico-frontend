import { type ChangeEvent } from 'react';

type ToDo = 'ToDo';
type Doing = 'Doing';
type Done = 'Done';

export type ListType = ToDo | Doing | Done;

export interface List {
  name: ListType;
  tasks: Task[];
}

export type MovementList = Record<ListType, ListType>;

export interface NewTask {
  id?: string;
  lista?: ListType;
  titulo: string;
  conteudo: string;
}

export type Task = Required<NewTask>;

export interface HookHandlerData {
  title: string;
  content: string;
  onSaveHandler: () => void;
  onCloseHandler: (resetTask?: Task) => void;
  setTitleHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  setContentHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
