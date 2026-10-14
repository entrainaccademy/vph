"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

const linkBase =
  "inline-flex min-h-11 items-center rounded-md px-3 font-semibold transition-colors";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <div
      className="flex flex-1 items-center justify-end gap-2"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
    >
      {/* Desktop navigation */}
      <nav aria-label="Main" className="hidden md:flex md:flex-1 md:justify-center">
        <ul className="flex items-center gap-1">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`${linkBase} ${
                  isActive(item.href)
                    ? "text-navy underline decoration-gold decoration-2 underline-offset-8"
                    : "text-body hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href={site.phone.href}
        className="ml-1 inline-flex min-h-11 items-center gap-2 rounded-md bg-navy px-5 font-medium text-white transition-colors hover:bg-navy-700 md:hidden"
      >
        <PhoneIcon className="size-4" />
        <span>Call</span>
        <span className="sr-only">{site.phone.display}</span>
      </a>

      {/* Mobile menu toggle */}
      <button
        id="menu-toggle"
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-md border border-navy/25 text-navy hover:bg-white md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-wash shadow-card md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`${linkBase} w-full py-3 text-lg ${
                  isActive(item.href)
                    ? "bg-white text-navy shadow-sm"
                    : "text-body hover:bg-white hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
