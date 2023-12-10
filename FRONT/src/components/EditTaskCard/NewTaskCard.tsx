import { type ChangeEvent, useState } from 'react';
import {
  Input,
  Button,
  Textarea,
  CloseIcon,
  InputWrapper,
  CardContainer,
} from './styles';
import { type NewTask } from '../../types/Board';

interface NewTaskCardProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: NewTask) => void;
}

const NewTaskCard = ({
  isOpen,
  onSave,
  onClose,
}: NewTaskCardProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const setContentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSaveHandler = () => {
    const newTask = { titulo: title, conteudo: content };
    onSave(newTask);
    onClose();
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
      <Button onClick={onSaveHandler}>Salvar</Button>
    </CardContainer>
  );
};

export default NewTaskCard;
