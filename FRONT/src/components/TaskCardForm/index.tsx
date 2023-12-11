import { type MouseEvent, useState, type ChangeEvent } from 'react';

import InputLabel from './InputLabel';
import { PreviewField } from '@components/index';

import {
  Input,
  Button,
  Textarea,
  CloseIcon,
  InputWrapper,
  CardContainer,
} from './styles';

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
      <div className="flex flex-col flex-1">
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
        <InputLabel error={contentError} className="h-full pb-4">
          <PreviewField content={content}>
            <Textarea
              rows={4}
              name="content"
              value={content}
              placeholder="Conteúdo"
              onChange={onContentChangeHandler}
            />
          </PreviewField>
        </InputLabel>
      </div>
      <Button onClick={validateForm}>Save</Button>
    </CardContainer>
  );
}

export default TaskCardForm;
