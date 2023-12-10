type ToDo = 'ToDo';
type Doing = 'Doing';
type Done = 'Done';

export type ListType = ToDo | Doing | Done;

export interface List {
  name: ListType;
  tasks: Task[];
}

export type MovementList = Record<ListType, ListType>;

export interface Task {
  id: string;
  lista: ListType;
  titulo: string;
  conteudo: string;
}

export type NewTask = Omit<Task, 'id' | 'lista'>;
