'use client';

import { MultiStepForm } from '@/components/ui/MultiStepForm';
import type { MultiStepFormConfig } from '@/components/ui/MultiStepForm';

import s from './AIOs.module.css';
import { useInView } from './useInView';

type ApplicationFormIslandProps = {
  config: MultiStepFormConfig;
};

export function ApplicationFormIsland({ config }: ApplicationFormIslandProps) {
  const [formRef, formVisible] = useInView('400px');

  return (
    <div ref={formRef} className={s.formEmbed}>
      {formVisible ? (
        <MultiStepForm config={config} />
      ) : (
        <div className={s.formSkeleton} />
      )}
    </div>
  );
}

