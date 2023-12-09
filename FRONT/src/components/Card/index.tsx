import { type Task } from '../../types/Board';
import {
  CardContainer,
  TitleWrapper,
  EditIcon,
  ContentWrapper,
  ArrowLeftIcon,
  DeleteIcon,
  ArrowRightIcon,
} from './styles';
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
    <CardContainer className="group">
      <ContentWrapper>
        <TitleWrapper>
          <h3>{titulo}</h3>
          <EditIcon />
        </TitleWrapper>
        <p>{conteudo}</p>
      </ContentWrapper>
      <div className="flex justify-between invisible mt-4 group-hover:visible">
        {lista !== 'ToDo' ? <ArrowLeftIcon onClick={movePrevious} /> : <div />}
        <DeleteIcon
          onClick={() => {
            deleteTask(task);
          }}
        />
        {lista !== 'Done' ? <ArrowRightIcon onClick={moveNext} /> : <div />}
      </div>
    </CardContainer>
  );
};

export default Card;
