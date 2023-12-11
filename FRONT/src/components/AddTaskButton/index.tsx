import { useState } from 'react';
import NewTaskCard from '../NewTaskCard';
import { NewTaskCardTrigger, Container, AddTaskIcon } from './styles';
import { useKanban } from '../../contexts/KanbanProvider';

const AddTaskButton = ({ isEmptyList }: { isEmptyList: boolean }) => {
  const { createTask } = useKanban();
  const [isAddingTask, setIsAddingTask] = useState(false);

  return (
    <Container
      className={`${
        isAddingTask || isEmptyList
          ? 'active'
          : 'group-hover/column:max-h-20 group-hover/column:mb-4'
      }`}
    >
      <NewTaskCardTrigger
        onClick={() => {
          setIsAddingTask(true);
        }}
      >
        <AddTaskIcon />
      </NewTaskCardTrigger>
      <NewTaskCard
        isOpen={isAddingTask}
        onSave={createTask}
        onClose={() => {
          setIsAddingTask(false);
        }}
      />
    </Container>
  );
};

export default AddTaskButton;
