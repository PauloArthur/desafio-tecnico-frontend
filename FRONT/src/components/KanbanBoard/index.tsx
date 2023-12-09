import KanbanColumn from '../KanbanColumn';
import { useKanban } from '../../contexts/KanbanContext';

const KanbanBoard = () => {
  const { todoList, doingList, doneList } = useKanban();

  return (
    <div className="container h-full mx-auto columns-3">
      <KanbanColumn name="ToDo" tasks={todoList} />
      <KanbanColumn name="Doing" tasks={doingList} />
      <KanbanColumn name="Done" tasks={doneList} />
    </div>
  );
};

export default KanbanBoard;
