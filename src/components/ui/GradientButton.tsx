'use client';

import className from 'classnames';
import type { ReactNode } from 'react';

type GradientButtonProps = {
  xl?: boolean;
  children: ReactNode;
  scrollTo?: string;
  onClick?: () => void;
};

const GradientButton = ({
  xl,
  children,
  scrollTo,
  onClick,
}: GradientButtonProps) => {
  const handleClick = () => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  const btnClass = className(
    'inline-block rounded-lg text-center text-white font-bold cursor-pointer border-none shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl',
    {
      'text-xl py-5 px-10': xl,
      'text-lg py-3 px-6': !xl,
    },
  );

  return (
    <button
      type="button"
      className={btnClass}
      onClick={handleClick}
      style={{
        background: 'linear-gradient(90deg, #FF5B23, #F2BB06)',
      }}
    >
      {children}
    </button>
  );
};

export { GradientButton };
