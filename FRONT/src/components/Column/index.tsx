import Card from '../Card';
import { type List } from '../../types/KanbanBoard';
import { ListContainer, Container } from './styles';

const Column = ({ name, tasks }: List): JSX.Element => {
  return (
    <Container>
      <h2 className="px-2 py-4 text-2xl font-bold">{name}</h2>
      <ListContainer>
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default Column;
