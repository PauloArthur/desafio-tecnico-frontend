import { type ChangeEvent, useState } from 'react';
import {
  Input,
  Button,
  Textarea,
  CloseIcon,
  InputWrapper,
  CardContainer,
} from './styles';
import { type Task } from '../../types/Board';

interface EditTaskCardProps {
  task?: Task;
  isOpen: boolean;
  onClose: () => void;
}

const EditTaskCard = ({
  task,
  isOpen,
  onClose,
}: EditTaskCardProps): JSX.Element => {
  const [title, setTitle] = useState(task?.titulo ?? '');
  const [content, setContent] = useState(task?.conteudo ?? '');

  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const setContentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <CardContainer className={`${isOpen ? 'active' : ''}`}>
      <InputWrapper>
        <Input
          type="text"
          value={title}
          placeholder="Título"
          onChange={setTitleHandler}
        />
        <CloseIcon onClick={onClose} />
      </InputWrapper>
      <Textarea
        rows={5}
        value={content}
        name="content"
        placeholder="Conteúdo"
        onChange={setContentHandler}
      />
      <Button onClick={onClose}>Salvar</Button>
    </CardContainer>
  );
};

export default EditTaskCard;
