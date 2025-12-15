interface Step {
  title: string;
  detail: string;
}

interface StepsProps {
  steps: Step[];
}

export default function Steps({ steps }: StepsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <div key={step.title} className="card-surface flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/15 text-lg font-semibold text-silver/90">
            0{index + 1}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-silver/80">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
