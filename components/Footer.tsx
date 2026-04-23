import Link from "next/link";

const footerLinks = ["RSS Feed", "Newsletter", "Privacy Policy", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[rgba(228,228,231,0.2)]">
      <div className="max-w-[1280px] mx-auto px-8 py-12 flex items-center justify-between flex-wrap gap-6">
        <span className="font-serif italic text-lg text-[#064E3B]">The Curator</span>
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm text-[#71717A] hover:text-[#2F3334] transition-colors tracking-wide"
            >
              {link}
            </Link>
          ))}
        </nav>
        <span className="text-sm text-[#71717A]">© 2024 The Digital Curator. All rights reserved.</span>
      </div>
    </footer>
  );
}
