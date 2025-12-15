import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  tag?: string;
  children?: ReactNode;
}

export default function Card({ title, description, tag, children }: CardProps) {
  return (
    <div className="card-surface">
      <div className="space-y-2">
        {tag && <span className="rounded-full bg-indigo/10 px-3 py-1 text-xs font-semibold text-silver/90">{tag}</span>}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-silver/80">{description}</p>
      </div>
      {children && <div className="mt-4 text-sm text-silver/80">{children}</div>}
    </div>
  );
}
