import { type ChangeEvent, useState } from 'react';

export interface NewCardHookArgs {
  onClose: () => void;
  onSave: (task: NewTask) => void;
}
const useNewCard = ({ onSave, onClose }: NewCardHookArgs): HookHandlerData => {
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
    onCloseHandler();
  };
  const onCloseHandler = () => {
    setTitle('');
    setContent('');
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

export default useNewCard;
