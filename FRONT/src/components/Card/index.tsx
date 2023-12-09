import { CardContainer } from './styles';

interface CardProps {
  card: Card;
  moveNext: (card: Card) => void;
  movePrevious: (card: Card) => void;
}

const Card = ({ card, moveNext, movePrevious }: CardProps) => {
  const { titulo, conteudo, lista } = card;

  return (
    <CardContainer className="group hover:cursor-pointer">
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
      <div className="justify-between hidden group-hover:flex">
        {lista !== 'ToDo' && (
          <button
            className="btn btn-primary"
            onClick={() => {
              movePrevious(card);
            }}
          >
            {'<'}
          </button>
        )}
        <button className="btn btn-secondary">Excluir</button>
        {lista !== 'Done' && (
          <button
            className="btn btn-primary"
            onClick={() => {
              moveNext(card);
            }}
          >
            {'>'}
          </button>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
