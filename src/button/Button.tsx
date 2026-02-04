import className from 'classnames';
import type { ReactNode } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
};

const Button = (props: IButtonProps) => {
  const btnClass = className(
    'inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600 cursor-pointer border-none',
    {
      'font-extrabold text-xl py-4 px-6': props.xl,
      'text-lg font-semibold py-2 px-4': !props.xl,
    },
  );

  return <button type="button" className={btnClass}>{props.children}</button>;
};

export { Button };
