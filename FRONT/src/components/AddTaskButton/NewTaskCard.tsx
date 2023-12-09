import { CardContainer } from './styles';

interface NewTaskCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewTaskCard = ({ isOpen, onClose }: NewTaskCardProps): JSX.Element => {
  return (
    <CardContainer className={`${isOpen ? 'active' : ''}`}>
      <input type="text" />
      <textarea name="content" id="" cols={30} rows={10}></textarea>
      <button onClick={onClose}>X</button>
      <button onClick={onClose}>Salvar</button>
    </CardContainer>
  );
};

export default NewTaskCard;
