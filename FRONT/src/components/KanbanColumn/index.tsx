import Card from '../Card';
import { ListContainer, Container } from './styles';
import { useKanban } from '../../contexts/KanbanContext';
import { type Task, type List } from '../../types/KanbanBoard';

const KanbanColumn = ({ name, tasks }: List): JSX.Element => {
  const { moveTaskPrevious, moveTaskNext } = useKanban();

  const movePrevious = (card: Task) => {
    moveTaskPrevious(card, name);
  };

  const moveNext = (card: Task) => {
    moveTaskNext(card, name);
  };

  return (
    <Container>
      <h2 className="px-2 py-4 text-2xl font-bold">{name}</h2>
      <ListContainer>
        {tasks.map((task) => (
          <Card
            key={task.id}
            card={task}
            moveNext={moveNext}
            movePrevious={movePrevious}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default KanbanColumn;
