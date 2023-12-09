import { CardContainer } from './styles';

const List = ({ titulo, conteudo }: Card) => {
  return (
    <CardContainer>
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
    </CardContainer>
  );
};

export default List;
