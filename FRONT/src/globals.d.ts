type ToDo = 'ToDo';
type Doing = 'Doing';
type Done = 'Done';

type ListType = ToDo | Doing | Done;

interface List {
  name: ListType;
  tasks: Task[];
}

type MovementList = Record<ListType, ListType>;

interface NewTask {
  id?: string;
  lista?: ListType;
  titulo: string;
  conteudo: string;
}

type Task = Required<NewTask>;

interface HookHandlerData {
  title: string;
  content: string;
  onSaveHandler: () => void;
  onCloseHandler: (resetTask?: Task) => void;
  setTitleHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  setContentHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
