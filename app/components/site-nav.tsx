"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/#how", label: "How it works" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function linkClass(href: string) {
    const isActive = href === pathname;
    return `transition-colors hover:text-[#1f5c4e] ${
      isActive ? "font-bold text-[#1f5c4e]" : ""
    }`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6e0d3] bg-[#fbf8f2]/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-5">
        <Link
          href="/"
          className="font-['Fraunces'] text-[1.6rem] font-semibold text-[#0f2f29]"
          onClick={() => setIsOpen(false)}
        >
          Brick<span className="text-[#e9b872]">well</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 font-medium text-[#1b2623] md:flex"
        >
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
          <Link
            href="/#cta"
            className="rounded-full border-2 border-[#16443a] bg-[#16443a] px-5 py-2.5 text-[0.9rem] font-bold text-white transition-colors hover:bg-[#1f5c4e]"
          >
            Start investing
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md text-[#0f2f29] hover:bg-[#efe6d1] md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="h-0.5 w-5 rounded bg-current" />
          <span className="h-0.5 w-5 rounded bg-current" />
          <span className="h-0.5 w-5 rounded bg-current" />
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 flex flex-col gap-4 border-b border-[#e6e0d3] bg-[#fbf8f2] px-6 py-5 font-medium text-[#1b2623] shadow-lg md:hidden"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#cta"
            className="w-fit rounded-full border-2 border-[#16443a] bg-[#16443a] px-5 py-2.5 text-[0.9rem] font-bold text-white transition-colors hover:bg-[#1f5c4e]"
            onClick={() => setIsOpen(false)}
          >
            Start investing
          </Link>
        </nav>
      )}
    </header>
  );
}
