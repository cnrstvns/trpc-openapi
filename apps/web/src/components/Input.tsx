import React from 'react';
import clsx from 'clsx';

type Props = {
  name: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  placeholder?: string;
  copyable?: boolean;
  readOnly?: boolean;
  className?: string;
};

export default function Input({
  name,
  className,
  size,
  placeholder,
  copyable,
  readOnly,
  ...props
}: Props) {
  return (
    <input
      name={name}
      id={name}
      placeholder={placeholder}
      type="text"
      onFocus={copyable ? (e) => e.target.select() : undefined}
      readOnly={readOnly || copyable}
      autoComplete="off"
      spellCheck="false"
      autoCorrect="off"
      className={clsx(
        'bg-transparent text-white text-base border-2 border-gray-800 focus:ring ring-blue-500 ring-opacity-30 focus:outline-none transition focus-within:z-10 py-1 px-3',
        'placeholder-gray-500 placeholder-text-base',
        className,
        {
          'h-8 text-sm': size === 'xs',
          'h-9 text-sm': size === 'sm',
          'h-10 text-sm': size === 'md',
          'h-11': size === 'lg',
          'h-12': size === 'xl',
        },
        { 'rounded-md': !className?.includes('rounded') },
        { 'w-full': !className?.includes('w-') },
      )}
      {...props}
    />
  );
}
