import Card from '../Card';
import { ListContainer, Container } from './styles';

const KanbanColumn = ({ name, cards }: List) => {
  return (
    <Container>
      <h2 className="px-2 py-4 text-2xl font-bold">{name}</h2>
      <ListContainer>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default KanbanColumn;
