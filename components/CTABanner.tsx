import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title,
  description,
  primaryLabel = 'Book a consultation',
  primaryHref = '/contact',
  secondaryLabel = 'View our process',
  secondaryHref = '/process'
}: CTABannerProps) {
  return (
    <div className="card-surface flex flex-col gap-4 overflow-hidden border-indigo/20 bg-gradient-to-r from-indigo/20 via-indigo/10 to-indigo/5 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-silver/80">{description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link href={primaryHref} className="btn-primary">
          {primaryLabel}
        </Link>
        <Link href={secondaryHref} className="btn-secondary">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
