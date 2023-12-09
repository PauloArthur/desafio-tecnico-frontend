import {
  type PropsWithChildren,
  useState,
  useContext,
  useEffect,
  createContext,
} from 'react';

const KanbanContext = createContext<KanbanHook>({
  todoList: [],
  doingList: [],
  doneList: [],
  moveCard: (_card: Card, _listType: ListType) => null,
});

interface KanbanHook {
  todoList: Card[];
  doingList: Card[];
  doneList: Card[];
  moveCard: (card: Card, listType: ListType) => void;
}

export const KanbanProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const listMock: Card[] = [
    {
      id: '1',
      lista: 'ToDo',
      titulo: 'some title',
      conteudo: 'some content',
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

  const [list, setList] = useState<Card[]>(listMock);
  const todoList = list.filter((item) => item.lista === 'ToDo');
  const doingList = list.filter((item) => item.lista === 'Doing');
  const doneList = list.filter((item) => item.lista === 'Done');

  const moveCard = (card: Card, listType: ListType) => {
    const newList = list.filter((item) => item.id !== card.id);
    setList([...newList, { ...card, lista: listType }]);
  };

  useEffect(() => {}, []);

  const hooks: KanbanHook = {
    todoList,
    doingList,
    doneList,
    moveCard,
  };

  return (
    <KanbanContext.Provider value={hooks}>{children}</KanbanContext.Provider>
  );
};

/**
 * Modal Provider Call Function
 */
export const useKanban = (): KanbanHook => useContext(KanbanContext);
