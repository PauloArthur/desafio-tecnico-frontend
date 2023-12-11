import { type PropsWithChildren } from 'react';

interface InputLabelProps {
  error: boolean;
  className?: string;
  errorMessage?: string;
}

const InputLabel = ({
  error,
  children,
  className = '',
  errorMessage = 'Required field',
}: PropsWithChildren<InputLabelProps>) => {
  return (
    <div className={`relative w-full pt-4 pb-2 ${className}`}>
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
