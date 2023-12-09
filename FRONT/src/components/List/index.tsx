import Card from '../Card';
import { ListContainer } from './styles';

const List = ({ name, cards }: List) => {
  return (
    <ListContainer>
      <h2 className="px-2 py-4 text-2xl font-bold">{name}</h2>
      <div className="w-full h-full">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </ListContainer>
  );
};

export default List;
