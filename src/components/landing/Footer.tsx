import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

import { ZenovaLogo } from "./ZenovaLogo";

interface FooterProps {
  t: {
    footer: { rights: string; tagline: string; quickLinks: string; contact: string[] };
    nav: {
      about: string;
      careers: string;
      itineraries: string;
      cabins: string;
      services: string;
      gallery: string;
      offers: string;
      contact: string;
    };
  };
}

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "Zalo", href: "https://zalo.me/", Icon: MessageCircle },
];

export function Footer({ t }: FooterProps) {
  const quickLinks = [
    { label: t.nav.about, to: "/about" as const },
    { label: t.nav.careers, to: "/careers" as const },
    { label: t.nav.itineraries, to: "/itineraries" as const },
    { label: t.nav.cabins, to: "/cabins" as const },
    { label: t.nav.services, to: "/services/$serviceId" as const, params: { serviceId: "dining" } },
    { label: t.nav.gallery, to: "/gallery" as const },
    { label: t.nav.offers, to: "/offers" as const },
    { label: t.nav.contact, to: "/contact" as const },
  ];

  return (
    <footer className="border-t border-zenova-gold/20 bg-zenova-ink">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-16 lg:px-8">
        <div className="grid min-w-0 gap-8 md:grid-cols-3 md:items-start md:gap-12">
          {/* Brand + tagline */}
          <div className="flex min-w-0 flex-col items-center gap-4 text-center md:items-start md:text-left">
            <ZenovaLogo
              variant="stacked"
              showTagline={false}
              className="h-16 text-[13px] text-zenova-ivory/90 md:h-20 md:text-[14px]"
              aria-label="Zenova Cruise"
            />
            <p className="text-xs uppercase tracking-[0.32em] text-zenova-ivory/70">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex min-w-0 flex-col items-center gap-3 md:items-start md:text-left">
            <p className="mb-1 text-xs uppercase tracking-[0.28em] text-zenova-ivory/50">
              {t.footer.quickLinks}
            </p>
            <div className="grid w-full max-w-xs grid-cols-2 gap-x-4 md:flex md:max-w-none md:flex-col md:gap-0">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  {...(link.params ? { params: link.params } : {})}
                  className="flex min-h-11 min-w-0 items-center justify-center py-2 text-sm tracking-wide text-zenova-ivory/80 transition-colors hover:text-zenova-gold md:min-h-0 md:justify-start md:px-0 md:py-1"
                >
                  <span className="block truncate">{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact + socials */}
          <div className="flex min-w-0 flex-col items-center gap-3 text-center md:items-start md:text-left">
            <p className="mb-1 text-xs uppercase tracking-[0.28em] text-zenova-ivory/50">
              {t.nav.contact}
            </p>
            {t.footer.contact.map((item) => (
              <span
                key={item}
                className="flex min-h-11 min-w-0 items-center justify-center py-1 text-sm tracking-wide text-zenova-ivory/80 md:min-h-0 md:justify-start"
              >
                {item}
              </span>
            ))}
            <div className="mt-3 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zenova-gold/30 text-zenova-ivory/80 transition-colors hover:border-zenova-gold hover:text-zenova-gold md:h-9 md:w-9"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zenova-gold/15 pt-6 text-center md:mt-12">
          <p className="text-xs tracking-wide text-zenova-ivory/60">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
