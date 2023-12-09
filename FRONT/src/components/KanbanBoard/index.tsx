import List from '../List';
import { useKanban } from './useKanban';

const KanbanBoard = () => {
  const { todoList, doingList, doneList } = useKanban();

  return (
    <div className="container h-full mx-auto columns-3">
      <List name="ToDo" cards={todoList} />
      <List name="Doing" cards={doingList} />
      <List name="Done" cards={doneList} />
    </div>
  );
};

export default KanbanBoard;
