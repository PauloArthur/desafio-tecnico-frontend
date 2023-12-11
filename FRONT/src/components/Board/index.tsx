import Column from '../Column';
import { Container } from './styles';
import { useKanban } from '@contexts/KanbanProvider';

const Board = () => {
  const { todoList, doingList, doneList } = useKanban();

  return (
    <Container className="container">
      <Column name="ToDo" tasks={todoList} />
      <Column name="Doing" tasks={doingList} />
      <Column name="Done" tasks={doneList} />
    </Container>
  );
};

export default Board;
