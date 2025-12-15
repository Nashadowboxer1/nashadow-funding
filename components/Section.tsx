import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl space-y-3">
          {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-indigo">{eyebrow}</p>}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          {description && <p className="text-lg text-silver/80">{description}</p>}
        </div>
        <div className="mt-8 grid gap-6">{children}</div>
      </div>
    </section>
  );
}
