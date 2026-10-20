import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="/" className="flex shrink-0 items-center" aria-label="BenignBit home">
          <img src="/benign-bit-logo.jpg" alt="BenignBit Software Development" className="h-12 w-40 object-contain sm:h-14 sm:w-48" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative"
              onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
              {link.hasDropdown && (
                <div
                  className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-xl">
                    {services.map((s) => (
                      <a
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <s.icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{s.short}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/get-quote" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background lg:hidden">
          <div className="container-page space-y-1 py-6">
            {navLinks.map((link) => (
              <div key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
                {link.hasDropdown && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {services.map((s) => (
                      <a
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                      >
                        <s.icon className="h-4 w-4 text-primary" />
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
