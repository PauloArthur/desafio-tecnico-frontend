import { useState } from 'react';
import { type Task } from '../../types/Board';
import {
  ContentWrapper,
  CardContainer,
  TitleWrapper,
  EditIcon,
  ActionsWrapper,
  ArrowLeftIcon,
  DeleteIcon,
  ArrowRightIcon,
} from './styles';
import EditTaskCard from '../EditTaskCard';
import ContentMarkdown from '../ContentMarkdown';
import { useKanban } from '../../contexts/KanbanContext';

interface CardProps {
  task: Task;
}

const Card = ({ task }: CardProps) => {
  const { titulo, conteudo, lista } = task;
  const [isEditingTask, setIsEditingTask] = useState(false);
  const { moveTaskPrevious, moveTaskNext, deleteTask, editTask } = useKanban();

  const movePrevious = () => {
    moveTaskPrevious(task, lista);
  };

  const moveNext = () => {
    moveTaskNext(task, lista);
  };

  return (
    <CardContainer className={`${isEditingTask ? 'active' : ''}`}>
      <ContentWrapper>
        <div>
          <TitleWrapper>
            <h3>{titulo}</h3>
            <EditIcon
              onClick={() => {
                setIsEditingTask(true);
              }}
            />
          </TitleWrapper>
          <ContentMarkdown value={conteudo} />
        </div>
        <ActionsWrapper className="actionsWrapper group-hover/column:opacity-25">
          {lista !== 'ToDo' ? (
            <ArrowLeftIcon onClick={movePrevious} />
          ) : (
            <div />
          )}
          <DeleteIcon
            className="deleteIcon"
            onClick={() => {
              deleteTask(task);
            }}
          />
          {lista !== 'Done' ? <ArrowRightIcon onClick={moveNext} /> : <div />}
        </ActionsWrapper>
      </ContentWrapper>
      <EditTaskCard
        task={task}
        onSave={editTask}
        isOpen={isEditingTask}
        onClose={() => {
          setIsEditingTask(false);
        }}
      />
    </CardContainer>
  );
};

export default Card;
