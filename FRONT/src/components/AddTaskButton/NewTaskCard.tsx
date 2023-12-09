import { type ChangeEvent, useState } from 'react';
import {
  Input,
  Button,
  Textarea,
  CloseIcon,
  InputWrapper,
  CardContainer,
} from './styles';

interface NewTaskCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewTaskCard = ({ isOpen, onClose }: NewTaskCardProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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

export default NewTaskCard;
