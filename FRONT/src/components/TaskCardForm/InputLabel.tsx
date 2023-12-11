import { type PropsWithChildren } from 'react';

interface InputLabelProps {
  error: boolean;
  errorMessage?: string;
}

const InputLabel = ({
  error,
  children,
  errorMessage = 'Campo obrigatório',
}: PropsWithChildren<InputLabelProps>) => {
  return (
    <div className="relative w-full h-full pt-5 pb-2">
      <label
        className={`absolute top-0 left-0 text-xs text-[#e32636] invisible ${
          error ? '!visible' : ''
        }`}
      >
        {errorMessage}
      </label>
      {children}
    </div>
  );
};

export default InputLabel;
