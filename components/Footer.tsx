import Link from 'next/link';

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
  { href: '/disclosures', label: 'Disclosures' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-graphite/80 text-sm text-silver/80">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-white">Nashadow Credit & Funding Consulting</h3>
          <p className="leading-relaxed text-silver/70">
            Thoughtful guidance for business owners preparing for lending conversations, funding readiness, and long-term credit
            health.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Quick links</h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Disclosure</h4>
          <p className="text-silver/70">
            Nashadow provides consulting and guidance. We do not make lending decisions or guarantee outcomes. Funding approvals
            are determined by lenders and market conditions.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 bg-graphite/90 py-4 text-center text-xs text-silver/60">
        © {new Date().getFullYear()} Nashadow Credit & Funding Consulting. All rights reserved.
      </div>
    </footer>
  );
}
