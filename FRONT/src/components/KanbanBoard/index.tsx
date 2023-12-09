import KanbanColumn from '../KanbanColumn';
import { useKanban } from '../../contexts/KanbanContext';

const KanbanBoard = () => {
  const { todoList, doingList, doneList } = useKanban();

  return (
    <div className="container h-full mx-auto columns-3">
      <KanbanColumn name="ToDo" cards={todoList} />
      <KanbanColumn name="Doing" cards={doingList} />
      <KanbanColumn name="Done" cards={doneList} />
    </div>
  );
};

export default KanbanBoard;
