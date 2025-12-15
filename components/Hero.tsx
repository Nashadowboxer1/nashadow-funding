import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-indigo/30 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-sky/20 blur-3xl"></div>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo">Credit & Funding Consulting</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Calm, structured guidance for credit, funding readiness, and business resilience.
            </h1>
            <p className="text-lg text-silver/80">
              Nashadow partners with owners who want clarity, preparation, and a measured path to capital. We focus on education,
              documentation, and repeatable steps—not hype.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a conversation
              </Link>
              <Link href="/process" className="btn-secondary">
                See how we work
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-silver/70">
              <div className="space-y-1">
                <p className="text-white">Preparation first</p>
                <p>Documentation, scoring, and lender expectations clarified.</p>
              </div>
              <div className="space-y-1">
                <p className="text-white">Transparent guidance</p>
                <p>Realistic timelines, no guarantees, and thoughtful steps.</p>
              </div>
            </div>
          </div>
          <div className="card-surface max-w-md">
            <h2 className="text-xl font-semibold text-white">What to expect</h2>
            <ul className="mt-4 space-y-3 text-silver/80">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo"></span>
                Structured credit analysis and clarity on your profile.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo"></span>
                Funding readiness roadmap tailored to your timeline.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo"></span>
                Discreet, ongoing advisory support without hype.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo"></span>
                Clear disclaimers: results vary and lenders make approval decisions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
