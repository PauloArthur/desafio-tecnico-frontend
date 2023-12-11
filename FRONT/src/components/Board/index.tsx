import { Column } from '@components/index';
import { useKanban } from '@contexts/KanbanProvider';

import { Container } from './styles';

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
