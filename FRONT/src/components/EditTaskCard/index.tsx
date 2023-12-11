import TaskCardForm from '../TaskCardForm';
import useEditCard from './useEditCard';

interface EditTaskHookArgs {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}
interface EditTaskCardProps extends EditTaskHookArgs {
  isOpen: boolean;
}

const EditTaskCard = ({
  task,
  isOpen,
  onSave,
  onClose,
}: EditTaskCardProps): JSX.Element => {
  return (
    <TaskCardForm<EditTaskHookArgs>
      isOpen={isOpen}
      useHookHandler={useEditCard}
      hookArgs={{ task, onSave, onClose }}
    />
  );
};

export default EditTaskCard;
