import Column from '../Column';
import { useKanban } from '../../contexts/KanbanContext';

const Board = () => {
  const { todoList, doingList, doneList } = useKanban();

  return (
    <div className="container h-full mx-auto columns-3">
      <Column name="ToDo" tasks={todoList} />
      <Column name="Doing" tasks={doingList} />
      <Column name="Done" tasks={doneList} />
    </div>
  );
};

export default Board;
