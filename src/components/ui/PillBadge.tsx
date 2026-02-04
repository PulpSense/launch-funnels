import type { ReactNode } from 'react';

type PillBadgeProps = {
  children: ReactNode;
  variant?: 'blue' | 'orange';
};

const PillBadge = ({ children, variant = 'blue' }: PillBadgeProps) => {
  const variantClasses =
    variant === 'blue'
      ? 'bg-navy-700 text-white'
      : 'bg-orange-500 text-white';

  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${variantClasses}`}
    >
      {children}
    </span>
  );
};

export { PillBadge };
