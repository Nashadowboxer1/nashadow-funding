'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
  { href: '/disclosures', label: 'Disclosures' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuId = 'primary-navigation';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/5 backdrop-blur transition ${
        scrolled ? 'bg-graphite/80 shadow-soft' : 'bg-charcoal/80'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo/80 text-sm font-bold text-white shadow-soft">
            NC
          </span>
          <div className="leading-tight">
            <div>Nashadow</div>
            <p className="text-xs text-silver/70">Credit & Funding Consulting</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-silver/90 md:flex">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">Consult with us</Link>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={menuId}
          className="md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </div>
          </div>
        </button>
      </div>
      {open && (
        <div id={menuId} className="border-t border-white/10 bg-graphite/95 md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-sm text-silver/90">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-1 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center"
            >
              Consult with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
