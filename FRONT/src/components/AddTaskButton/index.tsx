import { useState } from 'react';
import { NewTaskCardTrigger, Container } from './styles';
import { CiCirclePlus } from 'react-icons/ci';
import NewTaskCard from '../EditTaskCard/NewTaskCard';
import { useKanban } from '../../contexts/KanbanContext';

const AddTaskButton = () => {
  const { createTask } = useKanban();
  const [isAddingTask, setIsAddingTask] = useState(false);

  return (
    <Container
      className={`${
        isAddingTask
          ? 'active'
          : 'group-hover/column:max-h-[80px] group-hover/column:mb-4'
      }`}
    >
      <NewTaskCardTrigger
        onClick={() => {
          setIsAddingTask(true);
        }}
      >
        <CiCirclePlus />
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
