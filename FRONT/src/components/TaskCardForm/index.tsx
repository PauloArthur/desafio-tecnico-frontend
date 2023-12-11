import { type MouseEvent, useState, type ChangeEvent } from 'react';
import { type HookHandlerData } from '../../types/Board';
import PreviewField from '../PreviewField';
import {
  Input,
  Button,
  Textarea,
  CloseIcon,
  InputWrapper,
  CardContainer,
} from './styles';
import InputLabel from './InputLabel';

interface TaskCardFormProps<T> {
  isOpen: boolean;
  hookArgs: T;
  useHookHandler: (hookArgs: T) => HookHandlerData;
}

function TaskCardForm<T>({
  isOpen,
  hookArgs,
  useHookHandler,
}: TaskCardFormProps<T>): JSX.Element {
  const {
    title,
    content,
    onSaveHandler,
    onCloseHandler,
    setTitleHandler,
    setContentHandler,
  } = useHookHandler(hookArgs);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleHandler(e);
    setTitleError(false);
  };

  const onContentChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContentHandler(e);
    setContentError(false);
  };

  const validateForm = (_: MouseEvent) => {
    if (title !== '' && content !== '') {
      onSaveHandler();
      return;
    }
    if (title === '') setTitleError(true);
    if (content === '') setContentError(true);
  };

  return (
    <CardContainer className={`${isOpen ? 'active' : ''}`}>
      <div className="flex flex-col h-full">
        <InputLabel error={titleError}>
          <InputWrapper>
            <Input
              name="title"
              type="text"
              value={title}
              placeholder="Título"
              onChange={onTitleChangeHandler}
            />
            <CloseIcon
              onClick={() => {
                setTitleError(false);
                setContentError(false);
                onCloseHandler();
              }}
            />
          </InputWrapper>
        </InputLabel>
        <InputLabel error={contentError}>
          <PreviewField content={content}>
            <Textarea
              name="content"
              value={content}
              placeholder="Conteúdo"
              onChange={onContentChangeHandler}
            />
          </PreviewField>
        </InputLabel>
      </div>
      <Button onClick={validateForm}>Salvar</Button>
    </CardContainer>
  );
}

export default TaskCardForm;
