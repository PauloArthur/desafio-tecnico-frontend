import { type ChangeEvent, useState } from 'react';

export interface EditCardHookArgs {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const useEditCard = ({
  task,
  onSave,
  onClose,
}: EditCardHookArgs): HookHandlerData => {
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

  return {
    title,
    content,
    onSaveHandler,
    onCloseHandler,
    setTitleHandler,
    setContentHandler,
  };
};

export default useEditCard;
