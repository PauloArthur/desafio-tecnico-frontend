import TaskCardForm from '../TaskCardForm';
import useNewCard from './useNewCard';
import { type NewTask } from '../../types/Board';

interface NewTaskHookArgs {
  onClose: () => void;
  onSave: (task: NewTask) => void;
}
interface NewTaskCardProps extends NewTaskHookArgs {
  isOpen: boolean;
}

const NewTaskCard = ({
  isOpen,
  onSave,
  onClose,
}: NewTaskCardProps): JSX.Element => {
  return (
    <TaskCardForm<NewTaskHookArgs>
      isOpen={isOpen}
      useHookHandler={useNewCard}
      hookArgs={{ onSave, onClose }}
    />
  );
};

export default NewTaskCard;
