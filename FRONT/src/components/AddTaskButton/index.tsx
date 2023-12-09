import { useState } from 'react';
import { Button, Container } from './styles';
import { CiCirclePlus } from 'react-icons/ci';
import NewTaskCard from './NewTaskCard';

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
      <Button
        onClick={() => {
          setIsAddingTask(true);
        }}
      >
        <CiCirclePlus />
      </Button>
      <NewTaskCard
        isOpen={isAddingTask}
        onClose={() => {
          setIsAddingTask(false);
        }}
      />
    </Container>
  );
};

export default AddTaskButton;
