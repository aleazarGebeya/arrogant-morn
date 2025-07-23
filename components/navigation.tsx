import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#stats" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Newsletter", href: "#newsletter" },
];

export function Navigation({ onContactClick }: { onContactClick: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-40 flex items-center justify-between py-4 px-6 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-md">
      <a href="#hero" className="text-2xl font-extrabold bg-gradient-to-br from-indigo-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg tracking-tight flex items-center gap-2">
        SaaSify
      </a>
      <nav className="hidden md:flex items-center gap-6 text-lg">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-cyan-300 font-medium px-2 py-1 rounded-xl focus:outline-none focus:ring-2 ring-cyan-300">
            {item.label}
          </a>
        ))}
        <Button
          className="ml-6 bg-cyan-500/70 hover:bg-cyan-600 shadow-md px-6 rounded-full font-bold backdrop-blur-lg"
          onClick={onContactClick}
        >Contact</Button>
      </nav>
      <div className="md:hidden flex items-center">
        <button
          aria-label="Toggle menu"
          className="text-white text-3xl hover:text-cyan-300 transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon size={32} /> : <MenuIcon size={32} />}
        </button>
        <div className={`fixed top-0 inset-x-0 z-50 bg-gradient-to-tr from-indigo-900/90 via-violet-900/90 to-cyan-800/95 backdrop-blur-lg h-screen flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}
          onClick={() => setOpen(false)}>
          <a href="#hero" className="text-3xl font-bold mb-2" onClick={() => setOpen(false)}>SaaSify</a>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-medium hover:text-cyan-300"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="bg-cyan-500/90 hover:bg-cyan-600 text-lg shadow px-10 py-2 rounded-full font-bold"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              onContactClick();
            }}
          >Contact</Button>
        </div>
      </div>
    </header>
  );
}
