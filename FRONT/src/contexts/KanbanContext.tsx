import {
  type PropsWithChildren,
  useState,
  useContext,
  useEffect,
  createContext,
} from 'react';
import {
  type Task,
  type ListType,
  type MovementList,
  type NewTask,
} from '../types/Board';

const previousList: MovementList = {
  ToDo: 'ToDo',
  Doing: 'ToDo',
  Done: 'Doing',
};
const nextList: MovementList = {
  ToDo: 'Doing',
  Doing: 'Done',
  Done: 'Done',
};

const KanbanContext = createContext<KanbanHook>({
  todoList: [],
  doingList: [],
  doneList: [],
  editTask: (_task: Task) => null,
  deleteTask: (_task: Task) => null,
  createTask: (_task: NewTask) => null,
  moveTaskNext: (_task: Task, _listType: ListType) => null,
  moveTaskPrevious: (_task: Task, _listType: ListType) => null,
});

interface KanbanHook {
  todoList: Task[];
  doingList: Task[];
  doneList: Task[];
  editTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  createTask: (task: NewTask) => void;
  moveTaskNext: (task: Task, listType: ListType) => void;
  moveTaskPrevious: (task: Task, listType: ListType) => void;
}

export const KanbanProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const listMock: Task[] = [
    {
      id: '1',
      lista: 'ToDo',
      titulo: 'some title',
      conteudo:
        'some content, some contentsome contentsome contentsome contentsome contentsome content, some contentsome contentsome contentsome content',
    },
    {
      id: '11',
      lista: 'ToDo',
      titulo: 'some title',
      conteudo: 'some content',
    },
    {
      id: '2',
      lista: 'Doing',
      titulo: 'some title',
      conteudo: 'some content',
    },
    {
      id: '21',
      lista: 'Doing',
      titulo: 'some title',
      conteudo: 'some content',
    },
    {
      id: '3',
      lista: 'Done',
      titulo: 'some title',
      conteudo: 'some content',
    },
    {
      id: '31',
      lista: 'Done',
      titulo: 'some title',
      conteudo: 'some content',
    },
  ];

  const [list, setList] = useState<Task[]>(listMock);
  const todoList = list.filter((item) => item.lista === 'ToDo');
  const doingList = list.filter((item) => item.lista === 'Doing');
  const doneList = list.filter((item) => item.lista === 'Done');

  const moveTask = (task: Task, listType: ListType) => {
    if (listType === task.lista) return;

    editTask({ ...task, lista: listType });
  };

  const moveTaskPrevious = (task: Task, type: ListType) => {
    moveTask(task, previousList[type]);
  };

  const moveTaskNext = (task: Task, type: ListType) => {
    moveTask(task, nextList[type]);
  };

  const editTask = (task: Task) => {
    const newList = list.filter((item) => item.id !== task.id);
    setList([...newList, task]);
  };

  const createTask = (task: NewTask) => {
    setList([
      ...list,
      {
        ...task,
        lista: 'ToDo',
        id: new Date().getUTCMilliseconds().toString(),
      },
    ]);
  };

  const deleteTask = (task: Task) => {
    const newList = list.filter((item) => item.id !== task.id);
    setList(newList);
  };

  useEffect(() => {}, []);

  const hooks: KanbanHook = {
    todoList,
    doneList,
    doingList,
    editTask,
    deleteTask,
    createTask,
    moveTaskNext,
    moveTaskPrevious,
  };

  return (
    <KanbanContext.Provider value={hooks}>{children}</KanbanContext.Provider>
  );
};

/**
 * Modal Provider Call Function
 */
export const useKanban = (): KanbanHook => useContext(KanbanContext);
