import { useState } from 'react';

import { useKanban } from '@contexts/KanbanProvider';
import { EditTaskCard, ContentMarkdown } from '@components/index';

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
        <div className="mb-4">
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
          <ArrowLeftIcon
            className={`${lista === 'ToDo' ? 'invisible' : ''}`}
            onClick={movePrevious}
          />
          <DeleteIcon
            className="deleteIcon"
            onClick={() => {
              deleteTask(task);
            }}
          />
          <ArrowRightIcon
            className={`${lista === 'Done' ? 'invisible' : ''}`}
            onClick={moveNext}
          />
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
