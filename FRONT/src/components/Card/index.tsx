import { type Task } from '../../types/KanbanBoard';
import { CardContainer } from './styles';
import { useKanban } from '../../contexts/KanbanContext';

interface CardProps {
  task: Task;
}

const Card = ({ task }: CardProps) => {
  const { titulo, conteudo, lista } = task;
  const { moveTaskPrevious, moveTaskNext, deleteTask } = useKanban();

  const movePrevious = () => {
    moveTaskPrevious(task, lista);
  };

  const moveNext = () => {
    moveTaskNext(task, lista);
  };

  return (
    <CardContainer className="group hover:cursor-pointer">
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
      <div className="justify-between hidden group-hover:flex">
        {lista !== 'ToDo' && (
          <button className="btn btn-primary" onClick={movePrevious}>
            {'<'}
          </button>
        )}
        <button
          className="btn btn-secondary"
          onClick={() => {
            deleteTask(task);
          }}
        >
          Excluir
        </button>
        {lista !== 'Done' && (
          <button className="btn btn-primary" onClick={moveNext}>
            {'>'}
          </button>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
