"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/archives", label: "Archives" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(244,244,245,0.85)] backdrop-blur-[24px] border-b border-[rgba(228,228,231,0.2)]">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif italic text-2xl text-[#064E3B] font-light tracking-tight">
          The Curator
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-base tracking-tight transition-colors ${
                  isActive
                    ? "text-[#064E3B] border-b-2 border-[#065F46] pb-1"
                    : "text-[#71717A] hover:text-[#2F3334]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
