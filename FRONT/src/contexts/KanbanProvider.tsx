import {
  type PropsWithChildren,
  useState,
  useContext,
  createContext,
} from 'react';
import {
  type Task,
  type ListType,
  type MovementList,
  type NewTask,
} from '../types/Board';
import apiTasks from '../services/apiTasks';
import { handleLogin } from '../services/api';

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

await handleLogin();
const initialList = await apiTasks.getTasks();

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

export const KanbanProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [list, setList] = useState<Task[]>(initialList);
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
    apiTasks
      .updateTask(task)
      .then((task) => {
        const newList = list.filter((item) => item.id !== task.id);
        setList([...newList, task]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createTask = (task: NewTask) => {
    apiTasks
      .createTask(task)
      .then((newTask) => {
        setList([...list, newTask]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = (task: Task) => {
    apiTasks
      .deleteTask(task.id)
      .then((tasks) => {
        setList(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

export const useKanban = (): KanbanHook => useContext(KanbanContext);
