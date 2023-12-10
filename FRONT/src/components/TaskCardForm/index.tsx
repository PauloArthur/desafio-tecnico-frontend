import { type HookHandlerData } from '../../types/Board';
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
}

export default TaskCardForm;
