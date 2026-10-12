import Link from "next/link";
import { fullAddress, site, whatsappLink } from "@/config/site";
import Logo from "./Logo";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    // Extra bottom padding keeps the floating WhatsApp button clear of
    // footer content.
    <footer className="bg-navy pb-24 text-white/85 sm:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1.4fr_1fr] lg:px-8">
        <div>
          <div className="inline-block rounded-lg bg-cream px-3 py-2">
            <Logo variant="footer" />
          </div>
          <p className="mt-4 font-heading text-lg font-semibold text-gold-light">
            {site.tagline}
          </p>
          <p className="mt-2 max-w-xs">
            FMCG distribution across Malappuram District since{" "}
            {site.established}.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-base font-semibold uppercase tracking-wider text-white">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <MapPinIcon className="mt-1 size-5 shrink-0 text-gold-light" />
              <address className="not-italic">{fullAddress}</address>
            </li>
            <li>
              <a
                href={site.phone.href}
                className="inline-flex min-h-11 items-center gap-3 hover:text-gold-light"
              >
                <PhoneIcon className="size-5 shrink-0 text-gold-light" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 hover:text-gold-light"
              >
                <WhatsAppIcon className="size-5 shrink-0 text-gold-light" />
                Chat on WhatsApp
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-base font-semibold uppercase tracking-wider text-white">
            Quick links
          </h2>
          <ul className="mt-4 space-y-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="border-t border-white/15 pt-6 text-sm text-white/75">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
