export const useKanban = () => {
  const list: Card[] = [
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
  ];

  const todoList = list.filter((item) => item.lista === 'ToDo');
  const doingList = list.filter((item) => item.lista === 'Doing');
  const doneList = list.filter((item) => item.lista === 'Done');

  return {
    todoList,
    doingList,
    doneList,
  };
};
