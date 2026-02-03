import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className(
    'inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600',
    {
      'font-extrabold text-xl py-4 px-6': props.xl,
      'text-lg font-semibold py-2 px-4': !props.xl,
    },
  );

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
