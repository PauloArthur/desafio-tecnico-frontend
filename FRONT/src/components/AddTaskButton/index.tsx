import { useState } from 'react';
import { NewTaskCardTrigger, Container } from './styles';
import { CiCirclePlus } from 'react-icons/ci';
import EditTaskCard from '../EditTaskCard';

const AddTaskButton = () => {
  const [isAddingTask, setIsAddingTask] = useState(true);

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
      <EditTaskCard
        isOpen={isAddingTask}
        onClose={() => {
          setIsAddingTask(false);
        }}
      />
    </Container>
  );
};

export default AddTaskButton;
