import { CardContainer } from './styles';

const List = ({ titulo, conteudo, lista }: Card) => {
  return (
    <CardContainer className="group hover:cursor-pointer">
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
      <div className="justify-between hidden group-hover:flex">
        {lista !== 'ToDo' && <button className="btn btn-primary">{'<'}</button>}
        <button className="btn btn-secondary">Excluir</button>
        {lista !== 'Done' && <button className="btn btn-primary">{'>'}</button>}
      </div>
    </CardContainer>
  );
};

export default List;
