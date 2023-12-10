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
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const EditTaskCard = ({
  task,
  isOpen,
  onSave,
  onClose,
}: EditTaskCardProps): JSX.Element => {
  const [title, setTitle] = useState(task.titulo);
  const [content, setContent] = useState(task.conteudo);

  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const setContentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSaveHandler = () => {
    const editedTask = { ...task, titulo: title, conteudo: content };
    onSave(editedTask);
    onCloseHandler(editedTask);
  };
  const onCloseHandler = (resetTask: Task = task) => {
    setTitle(resetTask.titulo);
    setContent(resetTask.conteudo);
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
        <CloseIcon
          onClick={() => {
            onCloseHandler();
          }}
        />
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

export default EditTaskCard;
